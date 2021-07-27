import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateParticipantPayload } from "./sagas";

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
    createParticipantLink(state, action: PayloadAction<CreateParticipantPayload>) {},
  },
});

export const { getParticipantLink, setParticipantLink, createParticipantLink } = createParticipantLinkSlice.actions;

export default createParticipantLinkSlice.reducer;