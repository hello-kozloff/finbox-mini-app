import { takeLatest } from 'redux-saga/effects';
import { SET_USER } from '../../constants/user';
import { fetchFriendsWorker } from '../worker/fetchFriends';

export function* fetchFriendsWatcher() {
  yield takeLatest(SET_USER, fetchFriendsWorker);
}