import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {};

const countCompleteTethersSlice = createSlice({
  name: 'countCompleteTethers',
  initialState,
  reducers: {
    getCompleteTethers(state, action) {},
    setCompleteTethers(state, action) {
      const completeTethers = action.payload;
      console.error(completeTethers);
      return completeTethers;
    }
  },
});

export const { getCompleteTethers, setCompleteTethers } = countCompleteTethersSlice.actions;

export default countCompleteTethersSlice.reducer;