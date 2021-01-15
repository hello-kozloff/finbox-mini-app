import React from 'react';
import {block} from "bem-cn";
import {FirebaseDatabaseNode} from "@react-firebase/database";
import {Spinner} from '@vkontakte/vkui';
import {DebtCarousel} from './modules';
import {getCurrentUserId} from "../../utils";
import {SortType} from './types';

const debtContainer = block('debt-container');

export default function DebtController(): React.ReactElement {
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
          <FirebaseDatabaseNode path={getCurrentUserId() || '/'}>
            {(data) => (
              data.isLoading ? <Spinner size="regular" /> : <div>Hello</div>
            )}
          </FirebaseDatabaseNode>
        </div>
      </div>
    </div>
  );
}