import { configureStore } from "@reduxjs/toolkit";
import songListReducer from "./slices/songListSlice";

export const store = configureStore({
  reducer: {
    songList: songListReducer,
  },
});
