import { put } from 'redux-saga/effects';
import bridge from '@vkontakte/vk-bridge';
import { ISetUserAction } from '../../actions/user/types';
import { SET_USER } from '../../constants/user';

export function* fetchAccessTokenWorker() {
  const response = yield bridge.send('VKWebAppGetAuthToken', {
    'app_id': 7712603,
    'scope': 'friends'
  }).catch(() => {
    alert('Прроизошло критическая ошибка. Пожалуйста, перезагрузите приложение.')
  });

  yield put<ISetUserAction>({
    type: SET_USER,
    payload: {
      user: {
        access_token: response.access_token
      }
    }
  });
}