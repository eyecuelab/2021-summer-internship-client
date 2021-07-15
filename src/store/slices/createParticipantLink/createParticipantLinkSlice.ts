import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any[] = [];

const createParticipantLinkSlice = createSlice({
  name: 'createParticipantLink',
  initialState,
  reducers: {
    getParticipantLink() {},
    setParticipantLink(state, action) {
      const participantLink = action.payload;
      return participantLink;
    },
    createParticipantLink(state, action: PayloadAction<{ tether_id: string, user_id: string, links_total: number }>) {},
  },
});

export const { getParticipantLink, setParticipantLink, createParticipantLink } = createParticipantLinkSlice.actions;

export default createParticipantLinkSlice.reducer;