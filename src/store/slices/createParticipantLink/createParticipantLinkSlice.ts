import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any[] = [];

const createParticipantLinkSlice = createSlice({
  name: 'createParticipantLink',
  initialState,
  reducers: {
    getParticipant() {},
    setParticipant(state, action) {
      const participantLink = action.payload;
      return participantLink;
    },
    createParticipant(state, action: PayloadAction<{ tether_id: string, user_id: string, links_total: number }>) {},
  },
});

export const { getParticipant, setParticipant, createParticipant } = createParticipantLinkSlice.actions;

export default createParticipantLinkSlice.reducer;