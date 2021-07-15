import { put, takeEvery, call } from '@redux-saga/core/effects';
import { makeRequest } from '../../utils/makeRequest';
import { PayloadAction } from '@reduxjs/toolkit';
import { getMyTethers, setMyTethers } from './myTethersSlice';

function* fetchMyTethers(action: PayloadAction<{ id: string }>) {
  const id = action.payload;
  const { success, data, error } = yield call(makeRequest, `http://localhost:8000/participants/user/${id}`, 'GET');
  if (success) {
    yield put(setMyTethers(data));
  }
  if (error) {
    // handle api error
    console.error(error);
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchMyTethers() {
  yield takeEvery(getMyTethers, fetchMyTethers);
}