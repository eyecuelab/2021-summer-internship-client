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

export interface CreateTetherPayload {
  data: {
    tether_activity: string;
    tether_duration: number;
    tether_duration_noun: string;
    tether_frequency: string;
    tether_timespan: number
    },
    onSuccess: () => void 
  }

function* createNewTether(action: PayloadAction<CreateTetherPayload>) {
  const { success, data, error } = yield call(makeRequest, 'http://localhost:8000/tethers', 'POST', action.payload.data);
  if (success) {
    yield put(setImpendingParticipantLink(data.tether_id));
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

const createTetherCallInitialData = { data: { tether_activity: '', tether_duration: 0, tether_duration_noun: '', tether_frequency: '', tether_timespan: 0 }, onSuccess: () => {} }

// eslint-disable-next-line import/prefer-default-export
export function* watchAllTethers() {
  yield takeEvery(getTethers().type, fetchAllTethers);
  yield takeEvery(createTether(createTetherCallInitialData).type, createNewTether);
}
