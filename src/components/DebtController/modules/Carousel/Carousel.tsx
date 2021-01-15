import React from 'react';
import { FirebaseDatabaseNode } from "@react-firebase/database";
import { FirebaseDatabaseNodeChildFunctionProps } from "@react-firebase/database/dist/types";
import Flickity, { FlickityOptions } from 'react-flickity-component';
import { Spinner } from '@vkontakte/vkui';
import { getCurrentUserId } from "../../../../utils";
import { DashboardCard } from '../../../Dashboard/modules';
import { DebtType } from "../../../../modals/AddDebt/types";
import IDebtCarousel from './types';

export default class DebtCarousel extends React.Component<IDebtCarousel> {
  public instance: Flickity | undefined;

  componentDidMount() {
    this.instance?.on('change', (index: number) => {
      this.props.onChange && this.props.onChange(index);
    });
  }

  render() {
    const options: FlickityOptions = {
      initialIndex: this.props.initialIndex || 0,
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
          if (node.type === type) {
            sum = Number(node.sum) + sum;
          }
        });
      }

      return `${sum} ₽`;
    }

    return (
      <Flickity flickityRef={(ref) => this.instance = ref} options={options}>
        <div className="carousel-cell">
          <FirebaseDatabaseNode path={getCurrentUserId() || '/'}>
            {(data) => (
              <DashboardCard
                title="Выданные займы"
                subtitle={data.isLoading ? <Spinner size="regular" /> : getTotalValue(DebtType.borrowed, data)}
              />
            )}
          </FirebaseDatabaseNode>
        </div>
        <div className="carousel-cell">
          <FirebaseDatabaseNode path={getCurrentUserId() || '/'}>
            {(data) => (
              <DashboardCard
                title="Полученные займы"
                subtitle={data.isLoading ? <Spinner size="regular" /> : getTotalValue(DebtType.lent, data)}
              />
            )}
          </FirebaseDatabaseNode>
        </div>
      </Flickity>
    );
  }
}