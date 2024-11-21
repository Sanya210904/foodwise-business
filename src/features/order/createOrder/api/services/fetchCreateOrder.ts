import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseApi } from '@src/shared/config/api/baseApi';
import { ServerError } from '@src/shared/types/ServerError';
import { FetchCreateOrderRequest } from '../../model/types/FetchCreateOrder';

export const fetchCreateOrder = createAsyncThunk<
  undefined,
  FetchCreateOrderRequest,
  { rejectValue: ServerError }
>('orders/create', async (data, { rejectWithValue }) => {
  console.log('request');
  try {
    const response = await baseApi.post(`products/props`, data);

    if (response.status !== 200) {
      throw new Error('Error while creating order');
    }

    return response.data;
  } catch (error: any) {
    console.log('Error');
    console.log(error);
    return rejectWithValue(error.response.data);
  }
});
