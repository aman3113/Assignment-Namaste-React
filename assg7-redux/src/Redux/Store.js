import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
