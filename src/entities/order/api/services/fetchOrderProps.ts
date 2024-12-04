import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseApi } from '@src/shared/config/api/baseApi';
import { ServerError } from '@src/shared/types/ServerError';
import { FetchOrdersResponse } from '../../model/types/FetchOrder';
import { ORDER_CATEGORIES } from '../../model/constants/OrderCategories';

export const fetchOrderProps = createAsyncThunk<
  FetchOrdersResponse,
  undefined,
  { rejectValue: ServerError }
>('orders/props', async (_, { rejectWithValue }) => {
  try {
    const response = await baseApi.get(`orders/props`);

    if (response.status !== 200) {
      throw new Error('Error while fetching orders');
    }

    console.log(response.data);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});
