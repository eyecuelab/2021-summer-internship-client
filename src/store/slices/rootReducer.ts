import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import authReducer from './auth/authSlice';
import usersReducer from './users/usersSlice';
import tethersReducer from './tethers/tethersSlice';
import oneUserReducer from './oneUser/oneUserSlice'
import myTethersReducer from './myTethers/myTethersSlice'
import participantLinkReducer from './createParticipantLink/createParticipantLinkSlice';
import countParticipatingTethersReducer from './countParticipatingTethers/countParticipatingTethersSlice';
import countCompleteTethersReducer from './countCompleteTethers/countCompleteTethersSlice';
import myCompleteTethersReducer from './myCompleteTethers/myCompleteTethersSlice'

export let rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  users: usersReducer,
  tethers: tethersReducer,
  oneUser: oneUserReducer,
  myTethers: myTethersReducer,
  participantLink: participantLinkReducer,
  participatingTethers: countParticipatingTethersReducer,
  completedTethers: countCompleteTethersReducer,
  myCompleteTethers: myCompleteTethersReducer,
});

export default function createReducer(injectedReducers = {}) {
  rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    users: usersReducer,
    tethers: tethersReducer,
    oneUser: oneUserReducer,
    myTethers: myTethersReducer,
    participantLink: participantLinkReducer,
    participatingTethers: countParticipatingTethersReducer,
    completedTethers: countCompleteTethersReducer,
    myCompleteTethers: myCompleteTethersReducer,
    ...injectedReducers,
  });

  return rootReducer;
}

export type RootState = ReturnType<typeof rootReducer>;
