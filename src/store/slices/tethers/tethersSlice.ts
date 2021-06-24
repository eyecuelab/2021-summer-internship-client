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
    createTether(state, action: PayloadAction<{ name: string, created_by: string, action: string, quantity: number, noun: string, duration: string }>) {},
  },
});

export const { setTethers, getTethers, createTether } = tethersSlice.actions;

export default tethersSlice.reducer;