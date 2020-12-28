import React from 'react';
import { CardScroll, Group, Header } from '@vkontakte/vkui';
import { DashboardCard } from './modules';

/**
 * The dashboard component.
 *
 * @constructor
 */
export default function Dashboard(): React.ReactElement {
  return (
    <Group header={<Header mode="primary">Активные долги</Header>} mode="plain">
      <CardScroll size="m">
        <DashboardCard
          subtitle="Дал в долг"
          title="125 000 ₽"
        />
      </CardScroll>
    </Group>
  )
}