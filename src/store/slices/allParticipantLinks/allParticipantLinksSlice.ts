import { createSlice } from '@reduxjs/toolkit';

const initialState: any[] = [];

const allParticipantLinksSlice = createSlice({
  name: 'allParticipantLinks',
  initialState,
  reducers: {
    getAllParticipantLinks(state, action) {},
    setAllParticipantLinks(state, action) {
      const tethers = action.payload;
      return tethers;
    }
  },
});

export const { getAllParticipantLinks, setAllParticipantLinks } = allParticipantLinksSlice.actions;

export default allParticipantLinksSlice.reducer;