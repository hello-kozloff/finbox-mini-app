import { put } from 'redux-saga/effects';
import bridge from '@vkontakte/vk-bridge';
import { ISetFriendsAction } from '../../actions/friends/types';
import { SET_FRIENDS } from '../../constants/friends';
import { store } from "../..";

export function* fetchFriendsWorker() {
  const data = yield bridge.send('VKWebAppCallAPIMethod', {
    method: 'friends.get',
    params: {
      order: 'hints',
      fields: 'nickname,photo_100',
      v: '5.21',
      access_token: store.getState().user.access_token
    }
  }).catch(() => {
    alert('Прроизошло критическая ошибка. Пожалуйста, перезагрузите приложение.')
  });

  yield put<ISetFriendsAction>({
    type: SET_FRIENDS,
    payload: {
      friends: data.response.items
    }
  });
}