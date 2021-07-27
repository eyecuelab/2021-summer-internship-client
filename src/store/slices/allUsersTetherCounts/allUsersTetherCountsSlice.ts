import { createSlice } from '@reduxjs/toolkit';

const initialState: any[] = [];

const allUsersTetherCountsSlice = createSlice({
  name: 'allUsersTetherCount',
  initialState,
  reducers: {
    getAllUsersTetherCounts() {},
    setAllUsersTetherCounts(state, action) {
      const all = action.payload;
      return all;
    },
  },
});

export const { getAllUsersTetherCounts, setAllUsersTetherCounts } = allUsersTetherCountsSlice.actions;

export default allUsersTetherCountsSlice.reducer;
