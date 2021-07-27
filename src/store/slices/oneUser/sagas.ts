import { put, takeEvery, call } from 'redux-saga/effects';
import { makeRequest } from '../../utils/makeRequest';
import { setOneUser, getOneUser } from './oneUserSlice';

function* fetchOneUser() {
  const { success, data, error } = yield call(makeRequest, 'profile', 'GET');
  if (success) {
    yield put(setOneUser(data));
  }
  if (error) {
    console.error(error);
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchOneUser() {
  yield takeEvery(getOneUser, fetchOneUser);
}
