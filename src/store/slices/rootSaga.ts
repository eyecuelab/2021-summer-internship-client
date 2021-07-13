import { all } from 'redux-saga/effects';
import { watchAllAuth } from './auth/sagas';
import { watchAllUsers } from './users/sagas';
import { watchAllTethers } from './tethers/sagas';
import { watchOneUser } from './oneUser/sagas';
import { watchOneUsersTethers } from './myTethers/sagas';
import { watchMyCompleteTethers } from './myCompleteTethers/sagas';
import { watchallParticipantLinks } from './allParticipantLinks/sagas';
import { watchCreateParticipantLink } from './createParticipantLink/sagas';
import { watchIncrementId } from './incrementId/sagas';

export default function* rootSaga() {
  yield all([watchAllAuth(), watchAllUsers(), watchAllTethers(), watchOneUser(), watchOneUsersTethers(), watchMyCompleteTethers(), watchallParticipantLinks(), watchCreateParticipantLink(), watchIncrementId()]);
}
