import { put, takeEvery, call } from 'redux-saga/effects';
import { makeRequest } from '../../utils/makeRequest';
import { getCompleteTethers, setCompleteTethers } from './countCompleteTethersSlice';
import { PayloadAction } from '@reduxjs/toolkit';

function* countCompleteTethers(action: PayloadAction<{ user_id: string }>) {
  const user_id = action.payload;
  const { success, data, error } = yield call(makeRequest, `http://localhost:8000/tethers/count/complete/${user_id}`, 'GET');
  if (success) {
    yield put(setCompleteTethers(data));
  }
  if (error) {
    console.error(error);
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchCountCompleteTethers() {
  yield takeEvery(getCompleteTethers({ user_id: '', }).type, countCompleteTethers);
}
