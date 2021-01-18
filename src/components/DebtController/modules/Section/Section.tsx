import React from 'react';
import Flickity, { FlickityOptions } from 'react-flickity-component';
import { DashboardCard } from '../../../Dashboard/modules';
import { DebtType } from "../../../../modals/AddDebt/types";
import IDebtSection from './types';

export default class  DebtSection extends React.Component<IDebtSection> {
  render() {
    /**
     * The function render total value.
     * @param type
     * @param data
     */
    function getTotalValue(type: DebtType, data: {} | null) {
      let sum = 0;

      if (data !== null) {
        Object.values(data).forEach((node: any) => {
          if (node.type === type) {
            sum = Number(node.sum) + sum;
          }
        });
      }

      return `${sum} ₽`;
    }

    return (
      <div className="carrousel-1">
        <div className="carrousel-1-cell">
          <DashboardCard
            title="Выданные займы"
            subtitle={getTotalValue(DebtType.borrowed, this.props.data)}
            onClick={() => this.props.onChange && this.props.onChange(0)}
            selected={this.props.index === 0}
          />
        </div>
        <div className="carrousel-1-cell">
          <DashboardCard
            title="Полученные займы"
            subtitle={getTotalValue(DebtType.lent, this.props.data)}
            onClick={() => this.props.onChange && this.props.onChange(1)}
            selected={this.props.index === 1}
          />
        </div>
      </div>
    );
  }
}