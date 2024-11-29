import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteOrder } from '@src/entities/order/api/slices/orderSlice';
import { baseApi } from '@src/shared/config/api/baseApi';
import { ServerError } from '@src/shared/types/ServerError';

export const fetchDeleteOrder = createAsyncThunk<
  undefined,
  string,
  { rejectValue: ServerError }
>('orders/delete', async (id, { rejectWithValue, dispatch }) => {
  try {
    const response = await baseApi.delete(`products/props/${id}`);

    if (response.status !== 204) {
      throw new Error('Error while creating order');
    }

    dispatch(deleteOrder(id));

    return response.data;
  } catch (error: any) {
    console.log('Error');
    console.log(error);
    return rejectWithValue(error.response.data);
  }
});
