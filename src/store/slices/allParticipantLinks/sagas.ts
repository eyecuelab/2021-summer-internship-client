import { put, takeEvery, call } from '@redux-saga/core/effects';
import { makeRequest } from '../../utils/makeRequest';
import { getallParticipantLinks, setallParticipantLinks } from './allParticipantLinksSlice';

function* fetchallParticipantLinks() {
  const { success, data, error } = yield call(makeRequest, `http://localhost:8000/participants`, 'GET');
  if (success) {
    yield put(setallParticipantLinks(data));
  }
  if (error) {
    // handle api error
    console.error(error);
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchallParticipantLinks() {
  yield takeEvery(getallParticipantLinks().type, fetchallParticipantLinks);
}