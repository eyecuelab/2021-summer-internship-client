import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import usersReducer from './users/usersSlice';
import oneUserReducer from './oneUser/oneUserSlice';
import tethersReducer from './tethers/tethersSlice';
import myTethersReducer from './myTethers/myTethersSlice';
import incrementIdReducer from './incrementId/incrementIdSlice';
import ringTheBellReducer from './ringTheBell/ringTheBellSlice';
import recentTethersReducer from './recentTethers/recentTethersSlice';
import myCompleteTethersReducer from './myCompleteTethers/myCompleteTethersSlice';
import allParticipantLinksReducer from './allParticipantLinks/allParticipantLinksSlice';
import fetchImpendingParticipantLinkReducer from './impendingParticipantLink/fetchImpendingParticipantLinkSlice';

export let rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  oneUser: oneUserReducer,
  tethers: tethersReducer,
  myTethers: myTethersReducer,
  incrementId: incrementIdReducer,
  ringTheBell: ringTheBellReducer,
  recentTethers: recentTethersReducer,
  myCompleteTethers: myCompleteTethersReducer,
  allParticipantLinks: allParticipantLinksReducer,
  impendingParticipantLink: fetchImpendingParticipantLinkReducer,
});

export default function createReducer(injectedReducers = {}) {
  rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
    oneUser: oneUserReducer,
    tethers: tethersReducer,
    myTethers: myTethersReducer,
    incrementId: incrementIdReducer,
    ringTheBell: ringTheBellReducer,
    recentTethers: recentTethersReducer,
    myCompleteTethers: myCompleteTethersReducer,
    allParticipantLinks: allParticipantLinksReducer,
    impendingParticipantLink: fetchImpendingParticipantLinkReducer,
    ...injectedReducers,
  });

  return rootReducer;
}

export type RootState = ReturnType<typeof rootReducer>;
