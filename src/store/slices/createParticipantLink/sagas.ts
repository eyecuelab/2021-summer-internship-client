import { PayloadAction } from "@reduxjs/toolkit";
import { takeEvery, call, put } from "redux-saga/effects";
import { makeRequest } from "../../utils/makeRequest";
import { createParticipantLink, setParticipantLink } from './createParticipantLinkSlice';

function* createParticipant(action: PayloadAction<{ tether_id: string; user_id: string; links_total: number; }>) {
  const { success, data, error } = yield call(makeRequest, `http://localhost:8000/participants`, 'POST', action.payload);
  if (success) {
    yield put(setParticipantLink(data));
    return data;
  }
  if (error) {
    // handle api error
    console.error(error);
  }
}

export function* watchCreateParticipantLink() {
  yield takeEvery(createParticipantLink({ tether_id: '', user_id: '', links_total: 0 }).type, createParticipant
  );
}