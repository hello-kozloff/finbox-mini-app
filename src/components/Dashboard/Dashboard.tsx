import React from 'react';
import { CardScroll, Group, Spinner } from '@vkontakte/vkui';
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

  function getTotal(type: string, values: any) {
    let summary = 0;

    Object.values(values).forEach((item: any) => {
      if (item.type === type) {
        summary = Number(item.summary) + summary;
      }
    });

    return summary;
  }

  return (
    <Group mode="plain">
      <CardScroll size="m">
        <FirebaseDatabaseNode path={`${userId}`}>
          {(data) => {
            return data.isLoading ? (
              <>
                <DashboardCard
                  title="Полученные займы"
                  subtitle={<Spinner size="small" />}
                />
                <DashboardCard
                  title="Выданные займы"
                  subtitle={<Spinner size="small" />}
                />
              </>
            ) : data.value ? (
              <>
                <DashboardCard
                  title="Полученные займы"
                  subtitle={`${data.value && getTotal('borrowed', data.value)} ₽`}
                />
                <DashboardCard
                  title="Выданные займы"
                  subtitle={`${data.value && getTotal('lent', data.value)} ₽`}
                />
              </>
            ) : (
              <>
                <DashboardCard
                  title="Полученные займы"
                  subtitle="0 ₽"
                />
                <DashboardCard
                  title="Выданные займы"
                  subtitle="0 ₽"
                />
              </>
            )
          }}
        </FirebaseDatabaseNode>
      </CardScroll>
    </Group>
  )
}