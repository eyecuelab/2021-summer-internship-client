import { all } from 'redux-saga/effects';
import { watchAllAuth } from './auth/sagas';
import { watchAllUsers } from './users/sagas';
import { watchAllTethers } from './tethers/sagas';
import { watchOneUser } from './oneUser/sagas';

export default function* rootSaga() {
  yield all([watchAllAuth(), watchAllUsers(), watchAllTethers(), watchOneUser()]);
}
