import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseApi } from '@src/shared/config/api/baseApi';
import { ServerError } from '@src/shared/types/ServerError';
import { FetchProductsResponse } from '../../model/types/FetchProduct';

export const fetchProducts = createAsyncThunk<
  FetchProductsResponse,
  undefined,
  { rejectValue: ServerError }
>('products/fetch', async (_, { rejectWithValue }) => {
  try {
    const response = await baseApi.get('products');

    console.log(response.data);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});
