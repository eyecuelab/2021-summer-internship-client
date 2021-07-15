import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import { makeRequest } from "../../utils/makeRequest";
import { createRingTheBell, setRingTheBell } from "./ringTheBellSlice";

export interface RingTheBellPayload {
  data: {
    tether_id: string;
  },
  onSuccess: () => void
}

function* ringTheBell(action: PayloadAction<RingTheBellPayload>) {
  const { success, data, error } = yield call(makeRequest, `http://localhost:8000/tethers/complete/${action.payload.data}`, 'PATCH', action.payload);
  if (success) {
    yield put(setRingTheBell(data));
    if (action.payload.onSuccess) {
      action.payload.onSuccess();
    }
    return data;
  }
  if (error) {
    // handle api error
    console.error(error);
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchRingTheBell() {
  yield takeEvery(createRingTheBell, ringTheBell);
}