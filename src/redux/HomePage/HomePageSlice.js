import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCoins = createAsyncThunk('coins/getCoins', async () => {
  const result = await axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
  return result.data;
});

const initialState = {
  coins: [],
  status: 'idle',
  error: null,
};

const coinSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCoins.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getCoins.fulfilled, (state, action) => (
        {
          ...state,
          coins: action.payload,
          status: 'succeeded',
        }
      ))
      .addCase(getCoins.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const coinsActions = coinSlice.actions;
export default coinSlice.reducer;
