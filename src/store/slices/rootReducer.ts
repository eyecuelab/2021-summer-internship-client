import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import usersReducer from './users/usersSlice';
import tethersReducer from './tethers/tethersSlice';
import oneUserReducer from './oneUser/oneUserSlice'
import myTethersReducer from './myTethers/myTethersSlice'
import myCompleteTethersReducer from './myCompleteTethers/myCompleteTethersSlice'
import allParticipantLinksReducer from './allParticipantLinks/allParticipantLinksSlice';
import fetchImpendingParticipantLinkReducer from './impendingParticipantLink/fetchImpendingParticipantLinkSlice';
import incrementIdReducer from './incrementId/incrementIdSlice';
import ringTheBellReducer from './ringTheBell/ringTheBellSlice';

export let rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  tethers: tethersReducer,
  oneUser: oneUserReducer,
  myTethers: myTethersReducer,
  myCompleteTethers: myCompleteTethersReducer,
  allParticipantLinks: allParticipantLinksReducer,
  impendingParticipantLink: fetchImpendingParticipantLinkReducer,
  incrementId: incrementIdReducer,
  ringTheBell: ringTheBellReducer,
});

export default function createReducer(injectedReducers = {}) {
  rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
    tethers: tethersReducer,
    oneUser: oneUserReducer,
    myTethers: myTethersReducer,
    myCompleteTethers: myCompleteTethersReducer,
    allParticipantLinks: allParticipantLinksReducer,
    impendingParticipantLink: fetchImpendingParticipantLinkReducer,
    incrementId: incrementIdReducer,
    ringTheBell: ringTheBellReducer,
    ...injectedReducers,
  });

  return rootReducer;
}

export type RootState = ReturnType<typeof rootReducer>;
