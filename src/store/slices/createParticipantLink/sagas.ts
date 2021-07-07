import { PayloadAction } from "@reduxjs/toolkit";
import { takeEvery, call, put } from "redux-saga/effects";
import { makeRequest } from "../../utils/makeRequest";
import { getParticipantLink, setParticipantLink } from './createParticipantLinkSlice';

function* createParticipantLink(action: PayloadAction<{ tether_id: string, user_id: string }>) {
  const { tether_id, user_id } = action.payload;
  const { success, data, error } = yield call(makeRequest, `http://localhost:8000/participants/${tether_id}/${user_id}`, 'GET');
  if (success) {
    yield put(setParticipantLink(data));
  }
  if (error) {
    console.error(error);
  }
}

export function* watchCreateParticipantLink() {
  yield takeEvery(getParticipantLink({ tether_id: '', user_id: '' }).type, createParticipantLink
  );
}