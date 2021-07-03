import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    createTether(state, action: PayloadAction<{ tether_activity: string, tether_duration: number, tether_duration_noun: string, tether_frequency: string, tether_timespan: number }>) {},
  },
});

export const { setTethers, getTethers, createTether } = tethersSlice.actions;

export default tethersSlice.reducer;