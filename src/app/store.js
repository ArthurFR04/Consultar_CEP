
import { configureStore } from '@reduxjs/toolkit';
import searchcepReducer from '../features/SearchCEP/searchcepSlice';

export const store = configureStore({
  reducer: {
    searchcep: searchcepReducer,
  },
});
