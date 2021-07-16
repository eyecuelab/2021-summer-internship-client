import { PayloadAction } from "@reduxjs/toolkit";
import { takeEvery, call, put } from "redux-saga/effects";
import { makeRequest } from "../../utils/makeRequest";
import { createParticipantLink, setParticipantLink } from './createParticipantLinkSlice';

export interface CreateParticipantPayload {
  data: {
    tether_id: string;
    user_id: string;
    links_total: number;
  },
  onSuccess: () => void
}

function* createParticipant(action: PayloadAction<CreateParticipantPayload>) {
  const { success, data, error } = yield call(makeRequest, `http://localhost:8000/participants`, 'POST', action.payload.data);
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
  yield takeEvery(createParticipantLink, createParticipant);
}