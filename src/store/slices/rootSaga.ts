import { all } from 'redux-saga/effects';
import { watchAllAuth } from './auth/sagas';
import { watchAllUsers } from './users/sagas';
import { watchAllTethers } from './tethers/sagas';
import { watchOneUser } from './oneUser/sagas';
import { watchOneUsersTethers } from './myTethers/sagas';
import { watchCountParticipatingTethers } from './countParticipatingTethers/sagas'
import { watchOneUsersCompleteTethers } from './myCompleteTethers/sagas';
import { watchallParticipantLinks } from './allParticipantLinks/sagas';

export default function* rootSaga() {
  yield all([watchAllAuth(), watchAllUsers(), watchAllTethers(), watchOneUser(), watchOneUsersTethers(), watchCountParticipatingTethers(), watchOneUsersCompleteTethers(), watchallParticipantLinks()]);
}
