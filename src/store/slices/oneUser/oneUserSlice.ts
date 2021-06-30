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
  },
});

export const { setOneUser, getOneUser } = oneUserSlice.actions;

export default oneUserSlice.reducer;