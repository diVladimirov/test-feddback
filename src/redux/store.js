import { configureStore } from "@reduxjs/toolkit";
import feedBackReducer from "./feedbacks/feedBackSlice";

export const store = configureStore({
  reducer: {
    feedback: feedBackReducer,
  },
});
