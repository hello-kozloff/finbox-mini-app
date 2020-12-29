import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Group, Header, SimpleCell, Spinner } from '@vkontakte/vkui';
import { IState } from "../../store/types/state";
import { getFriendsState } from "../../store/reducers/friends";
import { IContactsProps } from './types';

/**
 * The contacts component.
 *
 * @constructor
 */
function Contacts(props: IContactsProps): React.ReactElement {
  /**
   * The function render friends.
   * @param friends
   */
  function renderFriends(friends: IContactsProps['friends']) {
    return friends.map((friend) => (
      <SimpleCell before={<Avatar src={friend.photo_100} size={48} />}>
        {friend.first_name} {friend.last_name}
      </SimpleCell>
    ))
  }

  return (
    <Group header={<Header mode="primary">Контакты</Header>} mode="plain">
      {props.friends.length > 0 ? renderFriends(props.friends) : <Spinner size="medium" />}
    </Group>
  )
}

const mapStateToProps = (state: IState) => ({
  friends: getFriendsState(state)
});

export default connect(mapStateToProps)(Contacts);