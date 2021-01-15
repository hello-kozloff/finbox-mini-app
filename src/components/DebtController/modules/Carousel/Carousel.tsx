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
    let sum = 0;

    if (!data.isLoading && data.value !== null) {
      Object.values(data.value).forEach((node: any) => {
        console.log(node);
        if (node.type === type) {
          console.log(node);
          sum = Number(node.sum) + sum;
        }
      });
    }

    return `${sum} ₽`;
  }

  return (
    <Flickity options={options}>
      <div className="carousel-cell">
        <FirebaseDatabaseNode path={getCurrentUserId() || '/'}>
          {(data) => (
            <DashboardCard
              title="Полученные займы"
              subtitle={data.isLoading ? <Spinner size="regular" /> : getTotalValue(DebtType.borrowed, data)}
            />
          )}
        </FirebaseDatabaseNode>
      </div>
      <div className="carousel-cell">
        <FirebaseDatabaseNode path={getCurrentUserId() || '/'}>
          {(data) => (
            <DashboardCard
              title="Выданные займы"
              subtitle={data.isLoading ? <Spinner size="regular" /> : getTotalValue(DebtType.lent, data)}
            />
          )}
        </FirebaseDatabaseNode>
      </div>
    </Flickity>
  );
}