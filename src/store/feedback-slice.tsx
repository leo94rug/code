import { Action, createSlice } from "@reduxjs/toolkit";

const feedbackSlice = createSlice({
  name: "feedback",
  initialState: {},
  reducers: {
    init(state, action) {},
  },
});
export interface FeedbackAction extends Action {
  payload: {
      feedback: string;
  };
}
export const feedbackReducer = feedbackSlice.actions;

export default feedbackSlice;
