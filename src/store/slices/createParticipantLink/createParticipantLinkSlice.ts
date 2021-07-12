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
    // setLocalTetherLink(state, action) {
    //   const localTetherLink = action.payload;
    //   return localTetherLink;
    // },
    createParticipant(state, action: PayloadAction<{ tether_id: string, user_id: string }>) {},
  },
});

export const { getParticipant, setParticipant, createParticipant } = createParticipantLinkSlice.actions;

export default createParticipantLinkSlice.reducer;