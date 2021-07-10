import { createSlice } from '@reduxjs/toolkit';

const initialState: any[] = [];

const myTethersSlice = createSlice({
  name: 'oneUser',
  initialState,
  reducers: {
    getOneUsersTethers(state, action) {},
    setOneUsersTethers(state, action) {
      const tethers = action.payload;
      return tethers;
    }
  },
});

export const { getOneUsersTethers, setOneUsersTethers } = myTethersSlice.actions;

export default myTethersSlice.reducer;