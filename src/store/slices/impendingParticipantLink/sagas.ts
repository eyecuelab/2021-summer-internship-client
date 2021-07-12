import { put, takeEvery, call } from 'redux-saga/effects';
import { makeRequest } from '../../utils/makeRequest';
import { setImpendingParticipantLink } from './fetchImpendingParticipantLinkSlice';

function* fetchImpendingParticipantLink() {
  // const { success, data, error } = yield call(makeRequest, 'http://localhost:8000/tethers', 'GET');
  // if (success) {
  //   yield put(setImpendingParticipantLink(data));
  // }
  // if (error) {
  //   // handle api error
  //   console.error(error);
  // }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchAllImpendingParticipantLink() {
  // yield takeEvery(getParticipantLink().type, fetchImpendingParticipantLink);
}
