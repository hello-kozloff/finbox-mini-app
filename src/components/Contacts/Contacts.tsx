import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Group, Header, SimpleCell } from '@vkontakte/vkui';
import { IState } from "../../store/types/state";
import { getUserState } from "../../store/reducers/user";

/**
 * The contacts component.
 *
 * @constructor
 */
function Contacts(): React.ReactElement {
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