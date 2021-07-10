import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {};

const countParticipatingTethersSlice = createSlice({
  name: 'countParticipatingTethers',
  initialState,
  reducers: {
    getParticipatingTethers(state, action) {},
    setParticipatingTethers(state, action) {
      const participatingTethers = action.payload;
      return participatingTethers;
    }
  },
});

export const { getParticipatingTethers, setParticipatingTethers } = countParticipatingTethersSlice.actions;

export default countParticipatingTethersSlice.reducer;