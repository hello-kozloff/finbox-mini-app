import React from 'react';
import { Group, Header, CellButton } from '@vkontakte/vkui';
import { Icon24HistoryBackwardOutline, Icon24Add } from '@vkontakte/icons';

/**
 * The informer component.
 *
 * @constructor
 */
export default function Informer(): React.ReactElement {
  return (
    <Group header={<Header mode="secondary">Нет просроченных долгов</Header>}>
      <CellButton before={<Icon24HistoryBackwardOutline />} disabled>
        Показать статистику
      </CellButton>
      <CellButton before={<Icon24Add />}>
        Добавить долг
      </CellButton>
    </Group>
  );
}