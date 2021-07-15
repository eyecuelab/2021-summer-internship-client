import { all } from 'redux-saga/effects';
import { watchAllAuth } from './auth/sagas';
import { watchAllUsers } from './users/sagas';
import { watchAllTethers } from './tethers/sagas';
import { watchOneUser } from './oneUser/sagas';
import { watchMyTethers } from './myTethers/sagas';
import { watchMyCompleteTethers } from './myCompleteTethers/sagas';
import { watchallParticipantLinks } from './allParticipantLinks/sagas';
import { watchCreateParticipantLink } from './createParticipantLink/sagas';
import { watchIncrementId } from './incrementId/sagas';
import { watchRingTheBell } from './ringTheBell/sagas';

export default function* rootSaga() {
  yield all([watchAllAuth(), watchAllUsers(), watchAllTethers(), watchOneUser(), watchMyTethers(), watchMyCompleteTethers(), watchallParticipantLinks(), watchCreateParticipantLink(), watchIncrementId(), watchRingTheBell()]);
}
