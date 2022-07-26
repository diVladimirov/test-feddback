import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://divladimirov-test-feedback.herokuapp.com/";

const createFeedBack = createAsyncThunk(
  "feedbacks/createFeedBackStatus",
  async (dataFromForm, { rejectWithValue }) => {
    try {
      const response = await axios.post("/feedbacks", dataFromForm);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const getAllFeedBacks = createAsyncThunk(
  "feedbacks/getAllFeedBacksStatus",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/feedbacks");
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const operations = {
  createFeedBack,
  getAllFeedBacks,
};

export default operations;
