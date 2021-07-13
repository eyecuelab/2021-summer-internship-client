import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    createIncrementId(state, action: PayloadAction<{ id: string }>) {
      return state;
    },
  },
});

export const { getIncrementId, setIncrementId, createIncrementId } = incrementIdSlice.actions;

export default incrementIdSlice.reducer;