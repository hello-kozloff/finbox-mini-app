import React from 'react';
import { block } from 'bem-cn';
import { Card as CardWrapper } from '@vkontakte/vkui';
import { IDashboardCardProps } from './types';
import './styles.scss';

/**
 * The class generator.
 */
const dashboardCard = block('dashboard-card');

/**
 * The dashboard card module.
 *
 * @param props
 * @constructor
 */
export default function DashboardCard(props: IDashboardCardProps): React.ReactElement {
  return (
    <CardWrapper>
      <div className={dashboardCard()}>
        {props.title && <span className={dashboardCard('subtitle')}>{props.title}</span>}
        {props.subtitle && <strong className={dashboardCard('title')}>{props.subtitle}</strong>}
      </div>
    </CardWrapper>
  );
}