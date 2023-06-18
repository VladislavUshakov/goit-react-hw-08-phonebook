import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './authOperations';

const registerReducer = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const logInReducer = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const logOutReducer = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const refreshingReducer = state => {
  state.isRefreshing = true;
};

const refreshFulfilledReducer = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const refreshRejectedReducer = state => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },

  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, registerReducer)
      .addCase(logIn.fulfilled, logInReducer)
      .addCase(logOut.fulfilled, logOutReducer)
      .addCase(refreshUser.pending, refreshingReducer)
      .addCase(refreshUser.fulfilled, refreshFulfilledReducer)
      .addCase(refreshUser.rejected, refreshRejectedReducer),
});

export const authReducer = authSlice.reducer;
