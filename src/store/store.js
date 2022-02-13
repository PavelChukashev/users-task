import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user'
import usersListReducer from '../features/usersSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    usersList: usersListReducer,
  }
})