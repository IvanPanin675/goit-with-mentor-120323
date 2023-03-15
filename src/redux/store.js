import { configureStore } from '@reduxjs/toolkit';

import userReduser from './users/usersSlice';

export const store = configureStore({
  reducer: { users: userReduser },
});
