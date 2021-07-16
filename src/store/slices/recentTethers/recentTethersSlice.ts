import { createSlice } from '@reduxjs/toolkit';

const initialState: any[] = [];

const recentTethersSlice = createSlice({
  name: 'recentTethers',
  initialState,
  reducers: {
    getRecentTethers() {},
    setRecentTethers(state, action) {
      const recentTethers = action.payload;
      return recentTethers;
    },
  },
});

export const { setRecentTethers, getRecentTethers } = recentTethersSlice.actions;

export default recentTethersSlice.reducer;