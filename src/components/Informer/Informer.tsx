import React from 'react';
import { block } from 'bem-cn';
import { Group, Header, Headline, Cell, CellButton, IconButton } from '@vkontakte/vkui';
import { Icon24HistoryBackwardOutline, Icon24Add } from '@vkontakte/icons';

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
    <Group header={<Header mode="secondary">Нет просроченных долгов</Header>}>
      <CellButton before={<Icon24HistoryBackwardOutline />}>
        Показать статистику
      </CellButton>
      <CellButton before={<Icon24Add />}>
        Добавить долг
      </CellButton>
    </Group>
  );
}