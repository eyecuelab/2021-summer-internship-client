import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import { makeRequest } from "../../utils/makeRequest";
import { createRingTheBell, setRingTheBell } from "./ringTheBellSlice";

function* ringTheBell(action: PayloadAction<{ tether_id: string }>) {
  const { success, data, error } = yield call(makeRequest, `http://localhost:8000/tethers/complete/${action.payload.tether_id}`, 'PATCH', action.payload);
  if (success) {
    yield put(setRingTheBell(data));
    return data;
  }
  if (error) {
    // handle api error
    console.error(error);
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchRingTheBell() {
  yield takeEvery(createRingTheBell({ tether_id: '' }).type, ringTheBell);
}