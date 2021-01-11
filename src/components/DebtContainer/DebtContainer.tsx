import React from 'react';
import { block } from 'bem-cn';
import './styles.scss';
import {DebtCard} from "..";
import { Spinner } from '@vkontakte/vkui';
import { FirebaseDatabaseNode } from "@react-firebase/database";
import {IState} from "../../store/types/state";
import {getFriendsState} from "../../store/reducers/friends";
import {connect} from "react-redux";
import {IDebtContainerProps} from './types';
import IFriend from "../../store/types/friend";
import moment from 'moment';

/**
 * The class generator.
 */
const debtContainer = block('debt-container');

/**
 * The debt container component.
 *
 * @constructor
 */
function DebtContainer(props: IDebtContainerProps): React.ReactElement {
  const [sortType, setSortType] = React.useState('max-amount');

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const userId = urlParams.get('vk_user_id');

  function getFriendById(id: IFriend['id']): IFriend | undefined {
    return props.friends.find((friend) => friend.id === id);
  }

  function renderDebt(data: any) {
    return data.map((node: any) => {
      const friend = getFriendById(Number(node.contactId));
      return friend && (
        <DebtCard
          first_name={friend.first_name}
          last_name={friend.last_name}
          photo_100={friend.photo_100}
          summary={node.summary}
          createdAt={node.createdAt}
          returnDate={node.returnDate}
        />
      ) || <React.Fragment/>
    });
  }

  function changeSortType() {
    switch (sortType) {
      case 'max-amount': return setSortType('return-date');
      case 'return-date': return setSortType('max-amount');
    }
  }

  console.log('onCHange');
  console.log('onCHange123123');

  return (
    <div className={debtContainer()}>
      <span className={debtContainer('header')}>
        Займы по <button type="button" onClick={() => changeSortType()}>
        {sortType === 'max-amount' && 'большей сумме ₽'}
        {sortType === 'return-date' && 'дате возврата'}
      </button>
      </span>
      <div className={debtContainer('content')}>
        {sortType === 'max-amount' && (
          <>
            <FirebaseDatabaseNode path={`${userId}`}>
              {(data) => {
                return data.isLoading ? <Spinner size="medium" /> : data.value && renderDebt(Object.values(data.value).sort((a: any, b: any) => {
                  return Number(b.summary) - Number(a.summary);
                }))
              }}
            </FirebaseDatabaseNode>
          </>
        )}
        {sortType === 'return-date' && (
          <>
            <FirebaseDatabaseNode path={`${userId}`}>
              {(data) => {
                return data.isLoading ? <Spinner size="medium" /> : data.value && renderDebt(Object.values(data.value).sort((a: any, b: any) => {
                  return moment(a.returnDate).diff(moment(b.returnDate))
                }))
              }}
            </FirebaseDatabaseNode>
          </>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state: IState) => ({
  friends: getFriendsState(state)
});

export default connect(mapStateToProps)(DebtContainer);