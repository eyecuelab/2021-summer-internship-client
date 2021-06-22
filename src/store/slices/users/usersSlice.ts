import { createSlice } from '@reduxjs/toolkit';

const initialState: any[] = [];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action) {
      console.log(`set users`);
      const users = action.payload;
      return users;
    },
    getUsers() {
      console.log(`get users`);
    },
  },
});

export const { setUsers, getUsers } = usersSlice.actions;

export default usersSlice.reducer;