import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../rootReducer';

const initialState: any[] = [];

const allParticipantLinksSlice = createSlice({
  name: 'allParticipantLinks',
  initialState,
  reducers: {
    getAllParticipantLinks(state, action) {},
    setAllParticipantLinks(state, action) {
      const tethers = action.payload;
      return tethers;
    },
  },
});

export const { getAllParticipantLinks, setAllParticipantLinks } = allParticipantLinksSlice.actions;

export const selectCanCompleteTether = (state: RootState) =>
  state.allParticipantLinks.every((participant) => participant.links_completed === participant.links_total);

export default allParticipantLinksSlice.reducer;
