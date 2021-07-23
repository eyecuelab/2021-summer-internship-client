import { put, takeEvery, call } from '@redux-saga/core/effects';
import { makeRequest } from '../../utils/makeRequest';
import { PayloadAction } from '@reduxjs/toolkit';
import { getMyCompleteTethers, setMyCompleteTethers } from './myCompleteTethersSlice';

export interface fetchMyCompleteTethersPayload {
  data: {
    id: string;
  }
  onSuccess: () => void
}

function* fetchMyCompleteTethers(action: PayloadAction<fetchMyCompleteTethersPayload>) {
  const id = action.payload;
  const { success, data, error } = yield call(makeRequest, `participants/user/${id}/complete`, 'GET');
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
  yield takeEvery(getMyCompleteTethers, fetchMyCompleteTethers);
}