import { configureStore } from '@reduxjs/toolkit';
import coinReducer from './HomePage/HomePageSlice';
import detailReducer from './DetailsPage/DetailsPageSlice';

const store = configureStore({
  reducer: {
    coins: coinReducer,
    details: detailReducer,
  },
});

export default store;
