import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    createRingTheBell(state, action: PayloadAction<{ tether_id: string }>) {
      return state;
    },
  },
});

export const { getRingTheBell, setRingTheBell, createRingTheBell } = ringTheBellSlice.actions;

export default ringTheBellSlice.reducer;