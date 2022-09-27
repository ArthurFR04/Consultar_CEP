// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

import { configureStore } from '@reduxjs/toolkit';
import searchcepReducer from '../features/SearchCEP/searchcepSlice';

export const store = configureStore({
  reducer: {
    searchcep: searchcepReducer,
  },
});
