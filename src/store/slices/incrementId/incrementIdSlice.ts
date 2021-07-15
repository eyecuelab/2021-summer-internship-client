import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IncrementOneTetherPayload } from './sagas';

const initialState: any = "";

const incrementIdSlice = createSlice({
  name: 'incrementId',
  initialState,
  reducers: {
    getIncrementId() {
    },
    setIncrementId(state, action) {
      const increment = action.payload;
      return increment;
    },
    createIncrementId(state, action: PayloadAction<IncrementOneTetherPayload>) {
      return state;
    },
  },
});

export const { getIncrementId, setIncrementId, createIncrementId } = incrementIdSlice.actions;

export default incrementIdSlice.reducer;