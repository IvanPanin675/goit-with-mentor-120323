const { createSlice } = require('@reduxjs/toolkit');
const { getUsers, getUserById, deleteUser, addUser } = require('./usersOperarions');

const users = createSlice({
  name: 'users',
  initialState: {
    users: [],
    currentUser: null,
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(getUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getUserById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUserById.fulfilled, (state, { payload }) => {
        state.currentUser = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUserById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, { payload }) => {
        state.users = state.users.filter(user => user.id !== payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(addUser.fulfilled, (state, { payload }) => {
        state.users.push(payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export default users.reducer;
