import { configureStore } from '@reduxjs/toolkit';

import authSlice from './auth-slice';
import feedbackSlice from './feedback-slice';

const store = configureStore({
  reducer: { 
    authSlice: authSlice.reducer,
    feedbackReducer: feedbackSlice.reducer
  },
});

export default store;
