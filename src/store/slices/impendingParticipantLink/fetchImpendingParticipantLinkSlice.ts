import { createSlice } from '@reduxjs/toolkit';

const initialState: any = "";

const impendingParticipantLinkSlice = createSlice({
  name: 'impendingParticipantLink',
  initialState,
  reducers: {
    getImpendingParticipantLink() {},
    setImpendingParticipantLink(state, action) {
      const link = action.payload;
      return link;
    },
  },
});

export const { getImpendingParticipantLink, setImpendingParticipantLink } = impendingParticipantLinkSlice.actions;

export default impendingParticipantLinkSlice.reducer;