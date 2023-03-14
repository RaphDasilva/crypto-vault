import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getDetails = createAsyncThunk('detail/getDetails', async (id) => {
  const url = `https://api.coingecko.com/api/v3/coins/${id}`;
  const result = await axios(url);
  return result.data;
});

const initialState = {
  coins: [],
  status: 'idle',
  error: null,
};

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDetails.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getDetails.fulfilled, (state, action) => (
        {
          ...state,
          detail: action.payload,
          status: 'succeeded',
        }
      ))
      .addCase(getDetails.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const detailActions = detailSlice.actions;
export default detailSlice.reducer;
