import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState:{
    status: 'checking', // 'checking' | 'authenticated' | 'unauthenticated'
    uid: null,
    email: null,
    displayName: null,
    photoUrl: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, {payload}) => {
      state.status = 'authenticated';
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoUrl = payload.photoURL;
      state.errorMessage = null;
    },
    logout: (state, {payload}) => {
      state.status = 'unauthenticated';
      state.uid = null; 
      state.email = null;
      state.displayName = null;
      state.photoUrl = null;
      state.errorMessage = payload?.error;
    },
    checkingCredentials: (state) => {
      state.status = 'checking';
    },
  },
})
export const { login, logout, checkingCredentials } = authSlice.actions;