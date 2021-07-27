import { createSlice } from '@reduxjs/toolkit';

const initialState: any[] = [];

const myCompleteTethersSlice = createSlice({
  name: 'oneUser',
  initialState,
  reducers: {
    getMyCompleteTethers(state, action) {},
    setMyCompleteTethers(state, action) {
      const tethers = action.payload;
      return tethers;
    }
  },
});

export const { getMyCompleteTethers, setMyCompleteTethers } = myCompleteTethersSlice.actions;

export default myCompleteTethersSlice.reducer;