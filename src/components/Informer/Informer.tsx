import React from 'react';
import { Group, Header, CellButton } from '@vkontakte/vkui';
import { Icon24HistoryBackwardOutline, Icon24Add } from '@vkontakte/icons';
import { IInformerProps } from "./types";

/**
 * The informer component.
 *
 * @constructor
 */
export default function Informer(props: IInformerProps): React.ReactElement {
  return (
    <Group header={<Header mode="secondary">Нет просроченных долгов</Header>}>
      <CellButton before={<Icon24HistoryBackwardOutline />} disabled>
        Показать статистику
      </CellButton>
      <CellButton
        before={<Icon24Add />}
        onClick={() => props.onModalShow && props.onModalShow('add-debt')}>
        Добавить долг
      </CellButton>
    </Group>
  );
}