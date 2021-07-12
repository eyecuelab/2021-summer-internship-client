import { PayloadAction } from "@reduxjs/toolkit";
import { takeEvery, call, put } from "redux-saga/effects";
import { makeRequest } from "../../utils/makeRequest";
import { createParticipant } from './createParticipantLinkSlice';

function* createParticipantLink(action: PayloadAction<{ tether_id: string; user_id: string; }>) {
  const { success, data, error } = yield call(makeRequest, `http://localhost:8000/participants`, 'POST', action.payload);
  if (success) {
    return data;
  }
  if (error) {
    // handle api error
    console.error(error);
  }
}

export function* watchCreateParticipantLink() {
  // yield takeEvery(getParticipant().type, fetchSpecialLink)
  yield takeEvery(createParticipant({ tether_id: '', user_id: '' }).type, createParticipantLink
  );
}