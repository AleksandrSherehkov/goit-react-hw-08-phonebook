import { createSlice } from '@reduxjs/toolkit';
import operations from './authOperations';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [operations.registerUser.pending](state, action) {
      state.isLoggedIn = true;
      state.error = null;
    },
    [operations.registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [operations.registerUser.rejected](state, action) {
      state.error = action.payload;
      state.isLoggedIn = false;
    },

    [operations.loginUser.pending](state, action) {
      state.isLoggedIn = true;
      state.error = null;
    },

    [operations.loginUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [operations.loginUser.rejected](state, action) {
      state.user = action.payload.user;
      state.isLoggedIn = false;
    },
    [operations.logoutUser.pending](state, action) {
      state.isLoggedIn = true;
      state.error = null;
    },

    [operations.logoutUser.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [operations.logoutUser.rejected](state, action) {
      state.isLoggedIn = false;
      state.error = action.payload.user;
    },

    [operations.getCurrentUser.pending](state) {
      state.isRefreshing = true;
    },
    [operations.getCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },

    [operations.getCurrentUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const persisteAuthReducer = persistReducer(authPersistConfig, authSlice.reducer);
