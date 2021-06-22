import { createSlice } from '@reduxjs/toolkit';

const initialState: any[] = [];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action) {
      const users = action.payload;
      return [...state, ...users];
    },
    getUsers() {},
  },
});

export const { setUsers, getUsers } = usersSlice.actions;

export default usersSlice.reducer;