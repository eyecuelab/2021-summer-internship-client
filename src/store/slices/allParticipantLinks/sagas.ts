import { put, takeEvery, call } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { makeRequest } from '../../utils/makeRequest';
import { getAllParticipantLinks, setAllParticipantLinks } from './allParticipantLinksSlice';

function* fetchAllParticipantLinks(action: PayloadAction<{ id: string }>) {
  const id = action.payload;
  const { success, data, error } = yield call(makeRequest, `participants/tether/${id}`, 'GET');
  if (success) {
    yield put(setAllParticipantLinks(data));
  }
  if (error) {
    // handle api error
    console.error(error);
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchallParticipantLinks() {
  yield takeEvery(getAllParticipantLinks, fetchAllParticipantLinks);
}