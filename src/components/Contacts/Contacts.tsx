import React from 'react';
import bridge from '@vkontakte/vk-bridge';
import { connect } from 'react-redux';
import { Avatar, Group, Header, SimpleCell } from '@vkontakte/vkui';
import { IState } from "../../store/types/state";
import { getUserState } from "../../store/reducers/user";
import { IContactsProps } from './types';

/**
 * The contacts component.
 *
 * @constructor
 */
function Contacts(props: IContactsProps): React.ReactElement {
  React.useEffect(() => {
    bridge.send('VKWebAppCallAPIMethod', {
      method: 'friends.get',
      params: {
        order: 'hints',
        v: '5.21',
        access_token: props.access_token
      }
    }).then((response) => console.log('111', response)).catch((error) => console.log('111', error));
  }, [props]);

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

const mapStateToProps = (state: IState) => ({
  access_token: getUserState(state).access_token
});

export default connect(mapStateToProps)(Contacts);