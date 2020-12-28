import React from 'react';
import bridge from '@vkontakte/vk-bridge';
import { connect } from 'react-redux';
import { Avatar, Group, Header, SimpleCell } from '@vkontakte/vkui';
import { IState } from "../../store/types/state";
import { getUserState } from "../../store/reducers/user";
import { IContactsProps, IFriend } from './types';

/**
 * The contacts component.
 *
 * @constructor
 */
function Contacts(props: IContactsProps): React.ReactElement {
  const [friends, setFriends] = React.useState<IFriend[]>([]);

  React.useEffect(() => {
    console.log(props.access_token);
    bridge.send('VKWebAppCallAPIMethod', {
      method: 'friends.get',
      params: {
        order: 'hints',
        fields: 'nickname,photo_100',
        v: '5.21',
        access_token: props.access_token
      }
    })
      .then((data: any) => {
        setFriends(data.response.items);
      })
      .catch((error) => console.error(error));
  }, [props]);

  /**
   * The function render friends.
   * @param friends
   */
  function renderFriends(friends: IFriend[]) {
    return friends.map((friend) => (
      <SimpleCell before={<Avatar src={friend.photo_100} size={48} />}>
        {friend.first_name} {friend.last_name}
      </SimpleCell>
    ))
  }

  return (
    <Group header={<Header mode="primary">Контакты</Header>} mode="plain">
      {renderFriends(friends)}
    </Group>
  )
}

const mapStateToProps = (state: IState) => ({
  access_token: getUserState(state).access_token
});

export default connect(mapStateToProps)(Contacts);