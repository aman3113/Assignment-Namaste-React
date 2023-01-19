import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    details: {},
    isLoggedIn: false,
  },
  reducers: {
    loginUser: (state, action) => {
      state.details = action.payload;
      state.isLoggedIn = true;
    },
    logoutUser: (state, action) => {
      state.details = {};
      state.isLoggedIn = false;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
