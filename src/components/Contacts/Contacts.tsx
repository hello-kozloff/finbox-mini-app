import React from 'react';
import bridge from '@vkontakte/vk-bridge';
import { Avatar, Group, Header, SimpleCell } from '@vkontakte/vkui';

/**
 * The contacts component.
 *
 * @constructor
 */
export default function Contacts(): React.ReactElement {
  bridge
    .send('VKWebAppGetFriends')
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });

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