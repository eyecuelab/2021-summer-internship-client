import { createSlice } from '@reduxjs/toolkit';


export interface ActiveModalOptions {
  CREATE: 'Create',
  EDIT: 'Edit',
  CONGRATULATIONS: 'Congratulations'
}

const initialState: any = '';

const activeModalSlice = createSlice({
  name: 'activeModal',
  initialState,
  reducers: {
    getActiveModal(state, action) {},
    setActiveModal(state, action) {
      const activeModal = action.payload;
      return activeModal;
    },
  },
});

export const { getActiveModal, setActiveModal } = activeModalSlice.actions;

export default activeModalSlice.reducer;
