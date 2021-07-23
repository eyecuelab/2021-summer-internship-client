import { put, takeEvery, call } from '@redux-saga/core/effects';
import { makeRequest } from '../../utils/makeRequest';
import { getAllUsersTetherCounts, setAllUsersTetherCounts } from './allUsersTetherCountsSlice';

function* fetchAllUsersTetherCounts() {
  const { success, data, error } = yield call(makeRequest, `http://localhost:8000/participants`, 'GET');
  if (success) {
    yield put(setAllUsersTetherCounts(data));
  }
  if (error) {
    console.error(error);
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchAllUsersTetherCounts() {
  yield takeEvery(getAllUsersTetherCounts, fetchAllUsersTetherCounts);
}