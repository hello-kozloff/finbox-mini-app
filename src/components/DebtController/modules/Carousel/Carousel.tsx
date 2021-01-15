import React from 'react';
import { FirebaseDatabaseNode } from "@react-firebase/database";
import { FirebaseDatabaseNodeChildFunctionProps } from "@react-firebase/database/dist/types";
import Flickity, { FlickityOptions } from 'react-flickity-component';
import { Spinner } from '@vkontakte/vkui';
import { getCurrentUserId } from "../../../../utils";
import { DashboardCard } from '../../../Dashboard/modules';
import { DebtType } from "../../../../modals/AddDebt/types";

export default function DebtCarousel(): React.ReactElement {
  const options: FlickityOptions = {
    cellAlign: 'left',
    prevNextButtons: false,
    pageDots: false
  };

  /**
   * The function render total value.
   * @param type
   * @param data
   */
  function getTotalValue(type: DebtType, data: FirebaseDatabaseNodeChildFunctionProps) {
    console.log(type, data.value);

    return `- ₽`;
  }

  return (
    <Flickity options={options}>
      <div className="carousel-cell">
        <FirebaseDatabaseNode path={getCurrentUserId() || '/'}>
          {(data) => (
            <DashboardCard
              title="Полученные займы"
              subtitle={data.isLoading ? <Spinner size="small" /> : getTotalValue(DebtType.borrowed, data)}
            />
          )}
        </FirebaseDatabaseNode>
      </div>
      <div className="carousel-cell">
        <FirebaseDatabaseNode path={getCurrentUserId() || '/'}>
          {(data) => (
            <DashboardCard
              title="Выданные займы"
              subtitle={data.isLoading ? <Spinner size="small" /> : getTotalValue(DebtType.lent, data)}
            />
          )}
        </FirebaseDatabaseNode>
      </div>
    </Flickity>
  );
}