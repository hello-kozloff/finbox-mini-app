import React from 'react';
import {block} from "bem-cn";
import {FirebaseDatabaseNode} from "@react-firebase/database";
import {Spinner} from '@vkontakte/vkui';
import {DebtCarousel} from './modules';
import {getCurrentUserId} from "../../utils";
import IDebtControllerProps, {SortType} from './types';
import {DebtType} from "../../modals/AddDebt/types";
import {connect} from "react-redux";
import {IState} from "../../store/types/state";
import {getFriendsState} from "../../store/reducers/friends";
import {DebtCard} from "../index";

const debtContainer = block('debt-container');

function DebtController(props: IDebtControllerProps): React.ReactElement {
  const [index, setIndex] = React.useState<number>(0);
  const [sortType, setSortType] = React.useState<SortType>(SortType.ByMaximumSum);

  /**
   * The function change sort type.
   */
  function changeSortType(): void {
    if (sortType === SortType.ByMaximumSum) {
      return setSortType(SortType.ByExpirationDate);
    } else {
      return setSortType(SortType.ByMaximumSum);
    }
  }

  /**
   * The function render card.
   * @param type
   * @param data
   */
  function renderCard(type: DebtType, data: any) {
    return data.map((node: any) => {
      if (type === node.type) {
        const friend = props.friends.find((friend) => friend.id === node.friendId);
        return friend ? (
          <DebtCard
            first_name={friend.first_name}
            last_name={friend.last_name}
            photo_100={friend.photo_100}
            sum={node.sum}
            createdAt={node.createdAt}
            expirationDate={node.expirationDate}
          />
        ) : <React.Fragment/>;
      } else return <React.Fragment />;
    });
  }

  return (
    <div>
      <DebtCarousel
        onChange={(index) => setIndex(index)}
      />
      <div className={debtContainer()}>
        <span className={debtContainer('header')}>
          Займы по {' '}
          <button type="button" onClick={() => changeSortType()}>
            {sortType === SortType.ByMaximumSum && 'большей сумме ₽'}
            {sortType === SortType.ByExpirationDate && 'дате возврата'}
          </button>
        </span>
        <div className={debtContainer('content')}>
          {index === 0 && (
            sortType === SortType.ByMaximumSum ? (
              <FirebaseDatabaseNode path={getCurrentUserId() || '/'}>
                {(data) => {
                  return data.isLoading ? <Spinner size="regular" /> : data.value && renderCard(DebtType.borrowed, Object.values(data.value).sort((a: any, b: any) => {
                    return Number(b.sum) - Number(a.sum);
                  }))
                }}
              </FirebaseDatabaseNode>
            ) : (
              <FirebaseDatabaseNode path={getCurrentUserId() || '/'}>
                {(data) => {
                  return data.isLoading ? <Spinner size="regular" /> : data.value && renderCard(DebtType.borrowed, Object.values(data.value).sort((a: any, b: any) => {
                    return Number(b.sum) - Number(a.sum);
                  }))
                }}
              </FirebaseDatabaseNode>
            )
          )}
          {index === 1 && (
            sortType === SortType.ByMaximumSum ? (
              <FirebaseDatabaseNode path={getCurrentUserId() || '/'}>
                {(data) => {
                  return data.isLoading ? <Spinner size="regular" /> : data.value && renderCard(DebtType.lent, Object.values(data.value).sort((a: any, b: any) => {
                    return Number(b.sum) - Number(a.sum);
                  }))
                }}
              </FirebaseDatabaseNode>
            ) : (
              <FirebaseDatabaseNode path={getCurrentUserId() || '/'}>
                {(data) => {
                  return data.isLoading ? <Spinner size="regular" /> : data.value && renderCard(DebtType.lent, Object.values(data.value).sort((a: any, b: any) => {
                    return Number(b.sum) - Number(a.sum);
                  }))
                }}
              </FirebaseDatabaseNode>
            )
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: IState) => ({
  friends: getFriendsState(state)
});

export default connect(mapStateToProps)(DebtController);