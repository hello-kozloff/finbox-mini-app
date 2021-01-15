import React from 'react';
import Flickity, { FlickityOptions } from 'react-flickity-component';
import { DashboardCard } from '../../../Dashboard/modules';

export default function DebtCarousel(): React.ReactElement {
  const options: FlickityOptions = {
    prevNextButtons: false,
    pageDots: false
  };

  return (
    <Flickity options={options}>
      <DashboardCard title="Полученные займы" subtitle="" />
      <DashboardCard title="Выданные займы" subtitle="" />
    </Flickity>
  );
}