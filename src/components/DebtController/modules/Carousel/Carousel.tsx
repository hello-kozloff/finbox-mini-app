import React from 'react';
import { FirebaseDatabaseNode } from "@react-firebase/database";
import Flickity, { FlickityOptions } from 'react-flickity-component';
import { Spinner } from '@vkontakte/vkui';
import { getCurrentUserId } from "../../../../utils";
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
        <FirebaseDatabaseNode path={getCurrentUserId() || '/'}>
          {(data) => (
            <DashboardCard
              title="Полученные займы"
              subtitle={data.isLoading && <Spinner size="small" />}
            />
          )}
        </FirebaseDatabaseNode>
      </div>
      <div className="carousel-cell">
        <FirebaseDatabaseNode path={getCurrentUserId() || '/'}>
          {(data) => (
            <DashboardCard
              title="Выданные займы"
              subtitle={data.isLoading && <Spinner size="small" />}
            />
          )}
        </FirebaseDatabaseNode>
      </div>
    </Flickity>
  );
}