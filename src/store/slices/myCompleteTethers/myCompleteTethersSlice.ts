import { createSlice } from '@reduxjs/toolkit';

const initialState: any[] = [];

const myCompleteTethersSlice = createSlice({
  name: 'oneUser',
  initialState,
  reducers: {
    getOneUsersCompleteTethers(state, action) {},
    setOneUsersCompleteTethers(state, action) {
      const tethers = action.payload;
      return tethers;
    }
  },
});

export const { getOneUsersCompleteTethers, setOneUsersCompleteTethers } = myCompleteTethersSlice.actions;

export default myCompleteTethersSlice.reducer;