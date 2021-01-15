import React from 'react';
import Flickity, { FlickityOptions } from 'react-flickity-component';
import { DashboardCard } from '../../../Dashboard/modules';

export default function DebtCarousel(): React.ReactElement {
  const options: FlickityOptions = {
    cellAlign: 'left',
    prevNextButtons: false,
    pageDots: false
  };

  return (
    <Flickity options={options}>
      <div className="carousel-cell">
        <DashboardCard title="Полученные займы" subtitle="" />
      </div>
      <div className="carousel-cell">
        <DashboardCard title="Выданные займы" subtitle="" />
      </div>
    </Flickity>
  );
}