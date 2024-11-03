import { createAsyncThunk } from '@reduxjs/toolkit';
import { ServerError } from '@src/shared/types/ServerError';
import { baseApi } from '@src/shared/config/api/baseApi';
import { clearShop } from '@src/entities/shop';

export const fetchLogout = createAsyncThunk<
  undefined,
  undefined,
  { rejectValue: ServerError }
>('auth/logout', async (_, { rejectWithValue, dispatch }) => {
  try {
    const response = await baseApi.get('users/logout');

    dispatch(clearShop());

    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});
