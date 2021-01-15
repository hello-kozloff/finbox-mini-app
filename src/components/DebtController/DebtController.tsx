import React from 'react';
import { block } from "bem-cn";
import { FirebaseDatabaseNode } from "@react-firebase/database";
import { Spinner } from '@vkontakte/vkui';
import { DebtCarousel } from './modules';
import { getCurrentUserId } from "../../utils";

const debtContainer = block('debt-container');

export default function DebtController(): React.ReactElement {
  const [index, setIndex] = React.useState<number>(0);

  console.log(index);

  return (
    <div>
      <DebtCarousel
        onChange={(index) => setIndex(index)}
      />
      <div className={debtContainer()}>
        <span className={debtContainer('header')}>
          Займы по <button type="button">большей сумме ₽</button>
        </span>
        <div className={debtContainer('content')}>
          <FirebaseDatabaseNode path={getCurrentUserId() || '/'}>
            {(data) => (
              data.isLoading ? <Spinner size="regular" /> : <div>Hello</div>
            )}
          </FirebaseDatabaseNode>
        </div>
      </div>
    </div>
  );
}