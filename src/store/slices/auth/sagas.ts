import { put, takeEvery, call } from 'redux-saga/effects';
import { register, login, setToken } from './authSlice';
import { setUser } from '../user/userSlice';
import { makeRequest } from '../../utils/makeRequest';
import { PayloadAction } from '@reduxjs/toolkit';
import { getOneUser } from '../oneUser/oneUserSlice';
import { getMyTethers } from '../myTethers/myTethersSlice';
import { getallParticipantLinks } from '../allParticipantLinks/allParticipantLinksSlice';
import { getUsers } from '../users/usersSlice';
import { getMyCompleteTethers } from '../myCompleteTethers/myCompleteTethersSlice';

function* registerUser(action: PayloadAction<{ username: string; password: string; email: string }>) {
  const { success, data, error } = yield call(makeRequest, 'http://localhost:8000/register', 'POST', action.payload);
  if (success) {
    yield put(setUser(data));
  }
  if (error) {
    // handle api error
    console.error(error);
  }
}

function* loginUser(action: PayloadAction<{ username: string; password: string }>) {
  const { success, data, error } = yield call(makeRequest, 'http://localhost:8000/login', 'POST', action.payload);
  if (success) {
    yield put(setToken({ token: data.access_token }));
    yield put(getOneUser());
    yield put(getMyTethers(data.sessionUser.user.id));
    yield put(getMyCompleteTethers(data.sessionUser.user.id));
    yield put(getUsers());
    yield put(getallParticipantLinks());
  }
  if (error) {
    // handle api error
    console.error(error);
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchAllAuth() {
  yield takeEvery(register({ username: '', email: '', password: '' }).type, registerUser);
  yield takeEvery(login({ username: '', password: '' }).type, loginUser);
}
