import { createSlice } from '@reduxjs/toolkit';

const initialState: any[] = [];

const allParticipantLinksSlice = createSlice({
  name: 'allParticipantLinks',
  initialState,
  reducers: {
    getallParticipantLinks() {},
    setallParticipantLinks(state, action) {
      const tethers = action.payload;
      return tethers;
    }
  },
});

export const { getallParticipantLinks, setallParticipantLinks } = allParticipantLinksSlice.actions;

export default allParticipantLinksSlice.reducer;