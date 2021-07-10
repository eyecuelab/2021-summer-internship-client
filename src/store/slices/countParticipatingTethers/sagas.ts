import { put, takeEvery, call } from 'redux-saga/effects';
import { makeRequest } from '../../utils/makeRequest';
import { getParticipatingTethers, setParticipatingTethers } from './countParticipatingTethersSlice';
import { PayloadAction } from '@reduxjs/toolkit';

function* countParticipatingTethers(action: PayloadAction<{ user_id: string }>) {
  const user_id = action.payload;
  const { success, data, error } = yield call(makeRequest, `http://localhost:8000/participants/count/${user_id}`, 'GET');
  if (success) {
    yield put(setParticipatingTethers([]));
    yield put(setParticipatingTethers(data));
  }
  if (error) {
    console.error(error);
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchCountParticipatingTethers() {
  yield takeEvery(getParticipatingTethers({ user_id: '', }).type, countParticipatingTethers);
}
