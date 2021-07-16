import { all } from 'redux-saga/effects';
import { watchAllAuth } from './auth/sagas';
import { watchAllUsers } from './users/sagas';
import { watchOneUser } from './oneUser/sagas';
import { watchAllTethers } from './tethers/sagas';
import { watchMyTethers } from './myTethers/sagas';
import { watchIncrementId } from './incrementId/sagas';
import { watchRingTheBell } from './ringTheBell/sagas';
import { watchRecentTethers } from './recentTethers/sagas';
import { watchMyCompleteTethers } from './myCompleteTethers/sagas';
import { watchallParticipantLinks } from './allParticipantLinks/sagas';
import { watchCreateParticipantLink } from './createParticipantLink/sagas';

export default function* rootSaga() {
  yield all(
    [
      watchAllAuth(),
      watchAllUsers(),
      watchOneUser(),
      watchAllTethers(),
      watchMyTethers(),
      watchIncrementId(),
      watchRingTheBell(),
      watchRecentTethers(),
      watchMyCompleteTethers(),
      watchallParticipantLinks(),
      watchCreateParticipantLink(),
    ]
  );
}
