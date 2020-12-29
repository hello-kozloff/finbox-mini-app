import { all } from 'redux-saga/effects';
import { fetchAccessTokenWatcher } from './fetchAccessToken';
import { fetchFriendsWatcher } from './fetchFriends';

export default function* watcher() {
  yield all([
    fetchAccessTokenWatcher(),
    fetchFriendsWatcher()
  ]);
}