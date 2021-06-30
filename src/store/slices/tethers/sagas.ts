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

function* createNewTether(action: PayloadAction<{ tether_action: string; tether_quantity: number; tether_noun: string; tether_duration: string }>) {
  const { success, data, error } = yield call(makeRequest, 'http://localhost:8000/tethers', 'POST', action.payload);
  if (error) {
    // handle api error
    console.error(error);
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchAllTethers() {
  yield takeEvery(getTethers().type, fetchAllTethers);
  yield takeEvery(createTether({ tether_action: '', tether_quantity: 0, tether_noun: '', tether_duration: '' }).type, createNewTether);
}
