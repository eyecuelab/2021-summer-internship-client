import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RingTheBellPayload } from './sagas';

const initialState: any = "";

const ringTheBellSlice = createSlice({
  name: 'ringTheBell',
  initialState,
  reducers: {
    getRingTheBell() {
    },
    setRingTheBell(state, action) {
      const increment = action.payload;
      return increment;
    },
    createRingTheBell(state, action: PayloadAction<RingTheBellPayload>) {
      return state;
    },
  },
});

export const { getRingTheBell, setRingTheBell, createRingTheBell } = ringTheBellSlice.actions;

export default ringTheBellSlice.reducer;