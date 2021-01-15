import React from 'react';
import { DebtCarousel } from './modules';

export default function DebtController(): React.ReactElement {
  const [index, setIndex] = React.useState<number>(0);

  console.log(index);

  return (
    <div>
      <DebtCarousel onChange={(index) => setIndex(index)} />
    </div>
  );
}