import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import { makeRequest } from "../../utils/makeRequest";
import { getOneUsersTethers } from "../myTethers/myTethersSlice";
import { createIncrementId, setIncrementId } from "./incrementIdSlice";

function* createNewIncrement(action: PayloadAction<{ id: string }>) {
  const { success, data, error } = yield call(makeRequest, `http://localhost:8000/participants/addIncrement/${action.payload.id}`, 'PATCH', action.payload);
  if (success) {
    console.warn(data);
    yield put(setIncrementId(data));
    return data;
  }
  if (error) {
    // handle api error
    console.error(error);
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchIncrementId() {
  yield takeEvery(createIncrementId({ id: '' }).type, createNewIncrement);
}