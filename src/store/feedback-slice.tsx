import { createSlice } from "@reduxjs/toolkit";

const feedbackSlice = createSlice({
  name: "feedback",
  initialState: {},
  reducers: {
    init(state, action) {},
  },
});

export const feedbackReducer = feedbackSlice.actions;

export default feedbackSlice;
