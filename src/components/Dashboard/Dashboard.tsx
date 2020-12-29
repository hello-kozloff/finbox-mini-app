import React from 'react';
import { CardScroll, Group, Header, Spinner } from '@vkontakte/vkui';
import { DashboardCard } from './modules';
import { FirebaseDatabaseNode } from "@react-firebase/database";

/**
 * The dashboard component.
 *
 * @constructor
 */
export default function Dashboard(): React.ReactElement {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const userId = urlParams.get('vk_user_id');

  function getTotal(values: any) {
    let summary = 0;

    Object.values(values).forEach((item: any) => {
      summary = Number(item.summary) + summary;
    });

    return summary;
  }

  return (
    <Group header={<Header mode="primary">Активные долги</Header>} mode="plain">
      <CardScroll size="m">
        <FirebaseDatabaseNode path={`${userId}/lent`}>
          {(data) => {
            return data.isLoading ? (
              <Spinner size="medium" />
            ) : data.value ? (
              <DashboardCard
                title={`${data.value && getTotal(data.value)} ₽`}
                subtitle="Дал в долг"
              />
            ) : (
              <DashboardCard subtitle="Вы не давали в долг" />
            )
          }}
        </FirebaseDatabaseNode>
        <FirebaseDatabaseNode path={`${userId}/borrowed`}>
          {(data) => {
            return data.isLoading ? (
              <Spinner size="medium" />
            ) : data.value ? (
              <DashboardCard subtitle={`${data.value && getTotal(data.value)} ₽`} />
            ) : (
              <DashboardCard subtitle="Вы не брали в долг" />
            )
          }}
        </FirebaseDatabaseNode>
      </CardScroll>
    </Group>
  )
}