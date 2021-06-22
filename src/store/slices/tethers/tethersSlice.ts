import { createSlice } from '@reduxjs/toolkit';

const initialState: any[] = [];

const tethersSlice = createSlice({
  name: 'tethers',
  initialState,
  reducers: {
    setTethers(state, action) {
      const tethers = action.payload;
      return tethers;
    },
    getTethers() {},
  },
});

export const { setTethers, getTethers } = tethersSlice.actions;

export default tethersSlice.reducer;