import { createSlice } from '@reduxjs/toolkit';

const initialState: any[] = [];

const myTethersSlice = createSlice({
  name: 'myTethers',
  initialState,
  reducers: {
    getMyTethers(state, action) {},
    setMyTethers(state, action) {
      const tethers = action.payload;
      return tethers;
    }
  },
});

export const { getMyTethers, setMyTethers } = myTethersSlice.actions;

export default myTethersSlice.reducer;