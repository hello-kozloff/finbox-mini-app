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

  console.log('index', index);
  console.log('sortType', sortType);
  console.log('data', data);

  return (
    <div>
      <DebtCarousel onChange={(index) => setIndex(index)} />
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

        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: IState) => ({
  friends: getFriendsState(state)
});

export default connect(mapStateToProps)(DebtController);