import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreateTetherPayload } from './sagas';

const initialState: any[] = [];

const tethersSlice = createSlice({
  name: 'tethers',
  initialState,
  reducers: {
    getTethers() {},
    setTethers(state, action) {
      const tethers = action.payload;
      return tethers;
    },
    createTether(state, action: PayloadAction<CreateTetherPayload>) {
      return state;
    },
  },
});

export const { setTethers, getTethers, createTether } = tethersSlice.actions;

export default tethersSlice.reducer;