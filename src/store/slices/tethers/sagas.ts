import { put, takeEvery, call } from 'redux-saga/effects';
import { makeRequest } from '../../utils/makeRequest';
import { setTethers, getTethers, createTether } from './tethersSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { setImpendingParticipantLink } from '../impendingParticipantLink/fetchImpendingParticipantLinkSlice';

function* fetchAllTethers() {
  const { success, data, error } = yield call(makeRequest, 'http://localhost:8000/tethers', 'GET');
  if (success) {
    yield put(setTethers(data));
  }
  if (error) {
    // handle api error
    console.error(error);
  }
}

function* createNewTether(action: PayloadAction<{ tether_activity: string; tether_duration: number; tether_duration_noun: string; tether_frequency: string; tether_timespan: number }>) {
  const { success, data, error } = yield call(makeRequest, 'http://localhost:8000/tethers', 'POST', action.payload);
  if (success) {
    yield put(setImpendingParticipantLink(data.tether_id));
    return data;
  }
  if (error) {
    // handle api error
    console.error(error);
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchAllTethers() {
  yield takeEvery(getTethers().type, fetchAllTethers);
  yield takeEvery(createTether({ tether_activity: '', tether_duration: 0, tether_duration_noun: '', tether_frequency: '', tether_timespan: 0 }).type, createNewTether);
}
