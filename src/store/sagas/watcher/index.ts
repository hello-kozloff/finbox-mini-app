import { all } from 'redux-saga/effects';
import { fetchAccessTokenWatcher } from './fetchAccessToken';

export default function* watcher() {
  yield all([
    fetchAccessTokenWatcher()
  ]);
}