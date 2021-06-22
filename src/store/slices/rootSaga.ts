import { all } from 'redux-saga/effects';
import { watchAllAuth } from './auth/sagas';
import { watchAllUsers } from './users/sagas';

export default function* rootSaga() {
  yield all([watchAllAuth(), watchAllUsers()]);
}
