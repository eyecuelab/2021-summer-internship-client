import { put, takeEvery, call } from 'redux-saga/effects';
import { makeRequest } from '../../utils/makeRequest';
import { setRecentTethers, getRecentTethers } from './recentTethersSlice';

function* fetchRecentTethers() {
  const { success, data, error } = yield call(makeRequest, 'http://localhost:8000/tethers/recent/recent/recent/recent', 'GET');
  if (success) {
    console.log(data);
    yield put(setRecentTethers(data));
  }
  if (error) {
    // handle api error
    console.error(error);
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchRecentTethers() {
  yield takeEvery(getRecentTethers, fetchRecentTethers);
}
