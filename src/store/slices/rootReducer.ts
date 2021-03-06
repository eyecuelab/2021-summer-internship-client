import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import usersReducer from './users/usersSlice';
import oneUserReducer from './oneUser/oneUserSlice';
import tethersReducer from './tethers/tethersSlice';
import myTethersReducer from './myTethers/myTethersSlice';
import activeModalReducer from './activeModal/activeModalSlice';
import incrementIdReducer from './incrementId/incrementIdSlice';
import ringTheBellReducer from './ringTheBell/ringTheBellSlice';
import recentTethersReducer from './recentTethers/recentTethersSlice';
import setTetherTitleReducer from './setTetherTitle/setTetherTitleSlice';
import myCompleteTethersReducer from './myCompleteTethers/myCompleteTethersSlice';
import allParticipantLinksReducer from './allParticipantLinks/allParticipantLinksSlice';
import fetchImpendingParticipantLinkReducer from './impendingParticipantLink/fetchImpendingParticipantLinkSlice';
import allUsersTetherCountsReducer from './allUsersTetherCounts/allUsersTetherCountsSlice';

export let rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  oneUser: oneUserReducer,
  tethers: tethersReducer,
  myTethers: myTethersReducer,
  activeModal: activeModalReducer,
  incrementId: incrementIdReducer,
  ringTheBell: ringTheBellReducer,
  tetherTitle: setTetherTitleReducer,
  recentTethers: recentTethersReducer,
  myCompleteTethers: myCompleteTethersReducer,
  allParticipantLinks: allParticipantLinksReducer,
  allUsersTetherCounts: allUsersTetherCountsReducer,
  impendingParticipantLink: fetchImpendingParticipantLinkReducer,
});

export default function createReducer(injectedReducers = {}) {
  rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
    oneUser: oneUserReducer,
    tethers: tethersReducer,
    myTethers: myTethersReducer,
    activeModal: activeModalReducer,
    incrementId: incrementIdReducer,
    ringTheBell: ringTheBellReducer,
    tetherTitle: setTetherTitleReducer,
    recentTethers: recentTethersReducer,
    myCompleteTethers: myCompleteTethersReducer,
    allParticipantLinks: allParticipantLinksReducer,
    allUsersTetherCounts: allUsersTetherCountsReducer,
    impendingParticipantLink: fetchImpendingParticipantLinkReducer,
    ...injectedReducers,
  });

  return rootReducer;
}

export type RootState = ReturnType<typeof rootReducer>;
