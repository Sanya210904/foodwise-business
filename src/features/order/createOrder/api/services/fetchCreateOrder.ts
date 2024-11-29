import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseApi } from '@src/shared/config/api/baseApi';
import { ServerError } from '@src/shared/types/ServerError';
import {
  FetchCreateOrderRequest,
  FetchCreateOrderResponse,
} from '../../model/types/FetchCreateOrder';
import { AxiosResponse } from 'axios';
import { addOrder } from '@src/entities/order';

export const fetchCreateOrder = createAsyncThunk<
  FetchCreateOrderResponse,
  FetchCreateOrderRequest,
  { rejectValue: ServerError }
>('orders/create', async (data, { rejectWithValue, dispatch }) => {
  console.log('request');
  try {
    const response: AxiosResponse<FetchCreateOrderResponse> =
      await baseApi.post(`products/props`, data);

    if (response.status !== 200) {
      throw new Error('Error while creating order');
    }

    const order = response.data.data;
    dispatch(addOrder(order));

    return response.data;
  } catch (error: any) {
    console.log('Error');
    console.log(error);
    return rejectWithValue(error.response.data);
  }
});
