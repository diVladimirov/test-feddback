import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://divladimirov-test-feedback.herokuapp.com/";

const createFeedBack = createAsyncThunk(
  "feedbacks/createFeedBackStatus",
  async (dataFromForm, { rejectWithValue }) => {
    try {
      const { data, request } = await axios.post("/feedbacks", dataFromForm);
      if (request.status === 201) {
        toast.success("Feedback created successful");
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const getAllFeedBacks = createAsyncThunk(
  "feedbacks/getAllFeedBacksStatus",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/feedbacks");
      return data;
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
