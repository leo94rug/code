import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    isLoggedIn: false,
  },
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.isLoggedIn = !!action.payload.token;
    },
    register(state, action) {
      state.token = action.payload.token;
      state.isLoggedIn = !!action.payload.token;
    },
    logout(state, action) {
      state.token = null;
      state.isLoggedIn = false;
    },
    init(state, action) {
      const token = action.payload;
      state.token = token;
      state.isLoggedIn = !!token;
    },
  },
});

export const authReducer = authSlice.actions;

export default authSlice;
