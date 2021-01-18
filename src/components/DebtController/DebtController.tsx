import React, {PropsWithChildren} from 'react';
import {block} from "bem-cn";
import {FirebaseDatabaseNode} from "@react-firebase/database";
import {Spinner,ActionSheet,ActionSheetItem} from '@vkontakte/vkui';
import {DebtCarousel} from './modules';
import {getCurrentUserId} from "../../utils";
import IDebtControllerProps, {SortType} from './types';
import {DebtType} from "../../modals/AddDebt/types";
import {connect} from "react-redux";
import {IState} from "../../store/types/state";
import {getFriendsState} from "../../store/reducers/friends";
import {DebtCard} from "../index";
import moment from 'moment';
import {FirebaseDatabaseNodeChildFunctionProps} from "@react-firebase/database/dist/types";
import firebase from "../../firebase";

const debtContainer = block('debt-container');

function DebtController(props: IDebtControllerProps): React.ReactElement {
  const [index, setIndex] = React.useState<number>(0);
  const [sortType, setSortType] = React.useState<SortType>(SortType.ByMaximumSum);
  const [items, setItems] = React.useState<any>(null);

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

  React.useEffect(() => {
    fetchItems();
  }, []);

  function fetchItems(): void {
    const data = firebase
      .database()
      .ref(getCurrentUserId() || '/');

    data.on('value', (snapshot) => {
      const val = snapshot.val();
      setItems(val);
    });
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
            itemKey="e"
            first_name={friend.first_name}
            last_name={friend.last_name}
            photo_100={friend.photo_100}
            sum={node.sum}
            createdAt={node.createdAt}
            expirationDate={node.expirationDate}
            onClick={() => props.onShowPopout && props.onShowPopout(
              //@ts-ignore
              <ActionSheet
                iosCloseItem={<ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
                onClose={() => props.onShowPopout && props.onShowPopout(undefined)}
              >
                <ActionSheetItem autoclose mode="destructive">
                  Удалить
                </ActionSheetItem>
              </ActionSheet>
            )}
          />
        ) : <React.Fragment/>;
      } else return <React.Fragment />;
    });
  }

  function renderResponse() {
    return items && Object.entries(items).map((elem) => {
      const key = elem[0];
      const value: any = elem[1];
      const friend = props.friends.find((friend) => friend.id === value.friendId);

      return friend && (
        <DebtCard
          itemKey={key}
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
      ) || <div/>;
    }) || <div/>;
  }

  return (
    <div>
      <DebtCarousel
        onChange={(index) => setIndex(index)}
      />
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
          {renderResponse}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: IState) => ({
  friends: getFriendsState(state)
});

export default connect(mapStateToProps)(DebtController);