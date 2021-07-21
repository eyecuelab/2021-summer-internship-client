import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreateTetherPayload, UpdateTetherPayload } from './sagas';

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
    updateTether(state, action: PayloadAction<UpdateTetherPayload>) {
      return state;
    },
  },
});

export const { setTethers, getTethers, createTether, updateTether } = tethersSlice.actions;

export default tethersSlice.reducer;