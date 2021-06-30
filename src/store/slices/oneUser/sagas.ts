import { put, takeEvery, call } from 'redux-saga/effects';
import { makeRequest } from '../../utils/makeRequest';
import { setOneUser, getOneUser } from './oneUserSlice';

function* fetchOneUser() {
  const { success, data, error } = yield call(makeRequest, 'http://localhost:8000/profile', 'GET');
  if (success) {
    yield put(setOneUser(data));
  }
  if (error) {
    // handle api error
    console.error(error);
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchOneUser() {
  yield takeEvery(getOneUser().type, fetchOneUser);
}
