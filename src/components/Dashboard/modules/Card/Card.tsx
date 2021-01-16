import React from 'react';
import { block } from 'bem-cn';
import { Card } from '@vkontakte/vkui';
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
    <Card className={dashboardCard()} onClick={() => props.onClick && props.onClick()}>
      <div className={dashboardCard('container')}>
        {props.title && <span className={dashboardCard('subtitle')}>{props.title}</span>}
        {props.subtitle && <strong className={dashboardCard('title')}>{props.subtitle}</strong>}
        {props.children && <div className={dashboardCard('children')}>{props.children}</div>}
      </div>
    </Card>
  );
}