import { put, takeEvery, call } from '@redux-saga/core/effects';
import { makeRequest } from '../../utils/makeRequest';
import { PayloadAction } from '@reduxjs/toolkit';
import { getMyCompleteTethers, setMyCompleteTethers } from './myCompleteTethersSlice';

function* fetchMyCompleteTethers(action: PayloadAction<{ id: string }>) {
  const id = action.payload;
  const { success, data, error } = yield call(makeRequest, `http://localhost:8000/tethers/complete/${id}`, 'GET');
  if (success) {
    yield put(setMyCompleteTethers(data));
  }
  if (error) {
    // handle api error
    console.error(error);
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchMyCompleteTethers() {
  yield takeEvery(getMyCompleteTethers({ id: '', }).type, fetchMyCompleteTethers);
}