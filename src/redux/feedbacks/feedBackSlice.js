import { createSlice } from "@reduxjs/toolkit";
import feedBacksOperations from "./feedBackOperations";

const initialState = {
  feedback: [{ name: null, email: null, message: null }],
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  extraReducers: {
    [feedBacksOperations.createFeedBack.fulfilled]: (state, action) => {
      state.feedback.push(action.payload);
    },
    [feedBacksOperations.getAllFeedBacks.fulfilled]: (state, action) => {
      state.feedback = action.payload;
    },
  },
});

export default feedbackSlice.reducer;
