import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import { makeRequest } from "../../utils/makeRequest";
import { createIncrementId, setIncrementId } from "./incrementIdSlice";

export interface IncrementOneTetherPayload {
  data: {
    id: string;
  }
  onSuccess: () => void
}

function* createNewIncrement(action: PayloadAction<IncrementOneTetherPayload>) {
  const { success, data, error } = yield call(makeRequest, `http://localhost:8000/participants/addIncrement/${action.payload.data}`, 'PATCH', action.payload.data.id);
  if (success) {
    yield put(setIncrementId(data));
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
export function* watchIncrementId() {
  yield takeEvery(createIncrementId, createNewIncrement);
}