import { createSlice } from "@reduxjs/toolkit";

const initialState: any[] = [];

const createParticipantLinkSlice = createSlice({
  name: 'createParticipantLink',
  initialState,
  reducers: {
    getParticipantLink(state, action) {
      // return;
    },
    setParticipantLink(state, action) {
      const participantLink = action.payload;
      return participantLink;
    }
  },
});

export const { getParticipantLink, setParticipantLink } = createParticipantLinkSlice.actions;

export default createParticipantLinkSlice.reducer;