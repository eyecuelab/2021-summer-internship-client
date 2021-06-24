import { put, takeEvery, call } from 'redux-saga/effects';
import { makeRequest } from '../../utils/makeRequest';
import { setTethers, getTethers, createTether } from './tethersSlice';
import { PayloadAction } from '@reduxjs/toolkit';

function* fetchAllTethers() {
  const { success, data, error } = yield call(makeRequest, 'http://localhost:8000/tethers', 'GET');
  if (success) {
    yield put(setTethers(data));
  }
  if (error) {
    // handle api error
    console.error(error);
  }
}

function* createNewTether(action: PayloadAction<{ action: string; quantity: number; noun: string; duration: string }>) {
  const { success, data, error } = yield call(makeRequest, 'http://localhost:8000/tethers', 'POST', action.payload);
  if (success) {
    yield put(createTether(data));
  }
  if (error) {
    // handle api error
    console.error(error);
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchAllTethers() {
  yield takeEvery(getTethers().type, fetchAllTethers);
  yield takeEvery(createTether({ name: '', created_by: '', action: '', quantity: 0, noun: '', duration: '' }).type, createNewTether);
}
