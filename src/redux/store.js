import { configureStore } from '@reduxjs/toolkit';
import coinReducer from './HomePage/HomePageSlice';

const store = configureStore({
  reducer: {
    coins: coinReducer,
  },
});

export default store;
