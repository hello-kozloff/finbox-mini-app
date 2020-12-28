import bridge from '@vkontakte/vk-bridge';

export function* fetchAccessTokenWorker() {
  const response = yield bridge.send('VKWebAppGetAuthToken', {
    'app_id': 9999,
    'scope': 'friends'
  });

  console.log('We revive data!')
  console.log(response);
}