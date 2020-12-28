import { takeLatest } from 'redux-saga/effects';
import { FETCH_ACCESS_TOKEN } from '../../constants/user';
import { fetchAccessTokenWorker } from '../worker/fetchAccessToken';

export function* fetchAccessTokenWatcher() {
  yield takeLatest(FETCH_ACCESS_TOKEN, fetchAccessTokenWorker);
}