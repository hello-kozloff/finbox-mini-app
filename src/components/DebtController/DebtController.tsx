import React from 'react';
import {block} from "bem-cn";
import {FirebaseDatabaseNode} from "@react-firebase/database";
import {Spinner} from '@vkontakte/vkui';
import {DebtCarousel} from './modules';
import {getCurrentUserId} from "../../utils";
import IDebtControllerProps, {SortType} from './types';
import {FirebaseDatabaseNodeChildFunctionProps} from "@react-firebase/database/dist/types";
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

  function renderCard(type: DebtType, value: FirebaseDatabaseNodeChildFunctionProps['value']) {
    const cards: React.ReactNodeArray = [];

    if (value !== null) {
      Object.values(value).forEach((node: any) => {
        if (node.type === type) {
          const friend = props.friends.find((friend) => friend.id === node.friendId);
          return friend && cards.push(
            <DebtCard
              first_name={friend.first_name}
              last_name={friend.last_name}
              photo_100={friend.photo_100}
              sum={node.sum}
              createdAt={node.createdAt}
              expirationDate={node.expirationDate}
            />
          )
        }
      });
    }

    return <div>{cards}</div>
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
                {(data) => (
                  data.isLoading ? <Spinner size="regular" /> : renderCard(DebtType.borrowed, data.value)
                )}
              </FirebaseDatabaseNode>
            ) : (
              <FirebaseDatabaseNode path={getCurrentUserId() || '/'}>
                {(data) => (
                  data.isLoading ? <Spinner size="regular" /> : renderCard(DebtType.borrowed, data.value)
                )}
              </FirebaseDatabaseNode>
            )
          )}
          {index === 1 && (
            sortType === SortType.ByMaximumSum ? (
              <FirebaseDatabaseNode path={getCurrentUserId() || '/'}>
                {(data) => (
                  data.isLoading ? <Spinner size="regular" /> : renderCard(DebtType.lent, data.value)
                )}
              </FirebaseDatabaseNode>
            ) : (
              <FirebaseDatabaseNode path={getCurrentUserId() || '/'}>
                {(data) => (
                  data.isLoading ? <Spinner size="regular" /> : renderCard(DebtType.lent, data.value)
                )}
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