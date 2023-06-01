import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import authSlice from './auth-slice';
import feedbackSlice from './feedback-slice';

export interface RootState {
  authSlice: ReturnType<typeof authSlice.reducer>;
  feedbackReducer: ReturnType<typeof feedbackSlice.reducer>;
}
const rootReducer = combineReducers<RootState>({
  authSlice: authSlice.reducer,
  feedbackReducer: feedbackSlice.reducer
});

const store = configureStore({
  reducer: rootReducer,
});


export default store;
