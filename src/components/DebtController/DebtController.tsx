import React from 'react';
import {block} from "bem-cn";
import {ActionSheet, ActionSheetItem} from '@vkontakte/vkui';
import {DebtCarousel} from './modules';
import {getCurrentUserId} from "../../utils";
import IDebtControllerProps, {SortType} from './types';
import {connect} from "react-redux";
import {IState} from "../../store/types/state";
import {getFriendsState} from "../../store/reducers/friends";
import {DebtCard} from "../index";
import firebase from "../../firebase";
import moment from 'moment';
import {DebtType} from "../../modals/AddDebt/types";

const debtContainer = block('debt-container');

function DebtController(props: IDebtControllerProps): React.ReactElement {
  const [index, setIndex] = React.useState<number>(0);
  const [sortType, setSortType] = React.useState<SortType>(SortType.ByMaximumSum);
  const [data, setData] = React.useState<{} | null>(null);

  function fetchData(): void {
    const userId = getCurrentUserId();

    if (userId !== null) {
      firebase.database().ref(userId).on('value', (snapshot) => {
        const value = snapshot.val();
        setData(value);
      });
    }
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  function getCurrentType(): DebtType {
    if (index === 0) {
      return DebtType.borrowed;
    } else return DebtType.lent;
  }

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

  function renderData() {
    return data === null ? (<div/>) : Object.entries(data).map((element) => {
      const key = element[0];
      const value: any = element[1];
      const friend = props.friends.find((friend) => friend.id === value.friendId);

      return friend && (
        <DebtCard
          itemKey={key}
          type={value.type}
          first_name={friend.first_name || ''}
          last_name={friend.last_name || ''}
          photo_100={friend.photo_100 || ''}
          sum={value.sum}
          createdAt={value.createdAt}
          expirationDate={value.expirationDate}
          onClick={(itemKey) => props.onShowPopout && props.onShowPopout(
            //@ts-ignore
            <ActionSheet
              iosCloseItem={<ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
              onClose={() => props.onShowPopout && props.onShowPopout(undefined)}
            >
              <ActionSheetItem autoclose mode="destructive" onClick={() => {
                firebase.database().ref(`${getCurrentUserId()}/${itemKey}`).remove();
              }}>
                Удалить
              </ActionSheetItem>
            </ActionSheet>
          )}
        />
      ) || <div/>
    }).sort((a: any, b: any) => {
      if (sortType === SortType.ByMaximumSum) {
        return Number(b.props.sum) - Number(a.props.sum);
      } else {
        return moment(new Date(a.props.expirationDate)).unix() - moment(new Date(b.props.expirationDate)).unix()
      }
    }).filter((element: any) => {
      return element.props.type === getCurrentType();
    });
  }

  return (
    <div>
      <DebtCarousel data={data} onChange={(index) => setIndex(index)} />
      <div className={debtContainer()}>
        <div className={debtContainer('header')}>
          <div className={debtContainer('title')}>
            Займы по {' '}
            <button type="button" onClick={() => changeSortType()}>
              {sortType === SortType.ByMaximumSum && 'большей сумме ₽'}
                {sortType === SortType.ByExpirationDate && 'дате возврата'}
            </button>
          </div>
        </div>
        <div className={debtContainer('content')}>
          {renderData()}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: IState) => ({
  friends: getFriendsState(state)
});

export default connect(mapStateToProps)(DebtController);