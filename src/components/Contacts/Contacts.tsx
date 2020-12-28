import React from 'react';
import { Avatar, Group, Header, SimpleCell } from '@vkontakte/vkui';

/**
 * The contacts component.
 *
 * @constructor
 */
export default function Contacts(): React.ReactElement {
  return (
    <Group header={<Header mode="primary">Контакты</Header>} mode="plain">
      <SimpleCell
        description="Дал в долг 125 000 ₽"
        before={
          <Avatar size={48} />
        }>Даниил Фетисов</SimpleCell>
    </Group>
  )
}