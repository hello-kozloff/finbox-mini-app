import React from 'react';
import { block } from 'bem-cn';
import { Group, Div, Button } from '@vkontakte/vkui';
import { Icon24Add } from '@vkontakte/icons';

/**
 * The class generator.
 */
const informer = block('informer');

/**
 * The informer component.
 *
 * @constructor
 */
export default function Informer(): React.ReactElement {
  return (
    <Group className={informer()}>
      <Div className={informer('add-debt')}>
        <Button mode="primary" size="l" stretched before={<Icon24Add />}>
          Добавить долг
        </Button>
      </Div>
    </Group>
  );
}