import { put, takeEvery, call } from 'redux-saga/effects';
import { makeRequest } from '../../utils/makeRequest';
import { setOneUser, getOneUser, getOneUsersTethers } from './oneUserSlice';
import { PayloadAction } from '@reduxjs/toolkit';
// import { useAppSelector } from '../../../hooks';

function* fetchOneUser() {
  const { success, data, error } = yield call(makeRequest, 'http://localhost:8000/profile', 'GET');
  // const { id } = data;
  if (success) {
    yield put(setOneUser(data));
  }
  if (error) {
    // handle api error
    console.error(error);
  }
}

function* fetchOneUsersTethers(action: PayloadAction<{ id: string }>) {
  const id = action.payload;
  const { success, data, error } = yield call(makeRequest, `http://localhost:8000/users/${id}/tethers`, 'GET');
  if (success) {
    console.log(data);
    yield put(setOneUser(data));
  }
  if (error) {
    // handle api error
    console.error(error);
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchOneUser() {
  yield takeEvery(getOneUser().type, fetchOneUser);
  yield takeEvery(getOneUsersTethers({ id: '', }).type, fetchOneUsersTethers);
}
