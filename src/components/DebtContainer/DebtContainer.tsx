import React from 'react';
import { block } from 'bem-cn';
import './styles.scss';
import {DebtCard} from "..";

/**
 * The class generator.
 */
const debtContainer = block('debt-container');

/**
 * The debt container component.
 *
 * @constructor
 */
export default function DebtContainer(): React.ReactElement {
  return (
    <div className={debtContainer()}>
      <span className={debtContainer('header')}>
        Займы по <button type="button">большей сумме ₽</button>
      </span>
      <div className={debtContainer('content')}>
        <DebtCard
          first_name="Никита"
          last_name="Козлов"
          photo_100="https://i.pinimg.com/originals/63/09/a4/6309a4ce7dd565a91e73b09f7a7c4838.jpg"
          summary="1000"
        />
      </div>
    </div>
  );
}