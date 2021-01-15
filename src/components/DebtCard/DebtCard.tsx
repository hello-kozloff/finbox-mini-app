import React from 'react';
import { block } from 'bem-cn';
import { IDebtCardProps } from './types';
import getUserName from "../../utils/getUserName";
import './styles.scss';
import {Avatar} from "@vkontakte/vkui";
import moment from 'moment';

/**
 * The class generator.
 */
const debtCard = block('debt-card');

/**
 * The debt card component.
 *
 * @param props
 * @constructor
 */
export default function DebtCard(props: IDebtCardProps): React.ReactElement {
  const userName = getUserName(props.first_name, props.last_name);

  return (
    <div className={debtCard()}>
      <Avatar src={props.photo_100} size={48} />
      <div className={debtCard('content')}>
        <span className={debtCard('username')}>
          {userName}
        </span>
        <div className={debtCard('datestamp')}>
          <span className={debtCard('date')}>
            {moment(props.createdAt).format('DD-MM-YYYY')}
          </span>
          {props.expirationDate && <span className={debtCard('date', { 'return': true })}>
            {moment(props.expirationDate).format('DD-MM-YYYY')}
          </span>}
        </div>
      </div>
      <span className={debtCard('price')}>
        {props.sum} ₽
      </span>
    </div>
  );
}