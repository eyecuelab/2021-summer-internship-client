import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {};

const oneUserSlice = createSlice({
  name: 'oneUser',
  initialState,
  reducers: {
    setOneUser(state, action) {
      const user = action.payload;
      return user;
    },
    getOneUser() {},
    getOneUserId() {},
    getOneUsersTethers(state, action) {
      const tethers = action.payload;
      return tethers;
    },
  },
});

export const { setOneUser, getOneUser, getOneUserId, getOneUsersTethers } = oneUserSlice.actions;

export default oneUserSlice.reducer;