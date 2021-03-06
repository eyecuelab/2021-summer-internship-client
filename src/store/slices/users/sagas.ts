import { put, takeEvery, call } from 'redux-saga/effects';
import { makeRequest } from '../../utils/makeRequest';
import { setUsers, getUsers } from './usersSlice';

function* fetchAllUsers() {
  const { success, data, error } = yield call(makeRequest, 'users', 'GET');
  if (success) {
    yield put(setUsers(data));
  }
  if (error) {
    // handle api error
    console.error(error);
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchAllUsers() {
  yield takeEvery(getUsers, fetchAllUsers);
}
