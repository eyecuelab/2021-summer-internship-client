import { createSlice } from '@reduxjs/toolkit';

const initialState: any = "";

const setTetherTitleSlice = createSlice({
  name: 'tetherTitle',
  initialState,
  reducers: {
    getTetherTitle() {},
    setTetherTitle(state, action) {
      const title = action.payload;
      return title;
    },
  },
});

export const { getTetherTitle, setTetherTitle } = setTetherTitleSlice.actions;

export default setTetherTitleSlice.reducer;