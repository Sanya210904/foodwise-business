import { createAsyncThunk } from '@reduxjs/toolkit';
import { ServerError } from '@src/shared/types/ServerError';
import { baseApi } from '@src/shared/config/api/baseApi';

export const fetchLogout = createAsyncThunk<
  undefined,
  undefined,
  { rejectValue: ServerError }
>('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await baseApi.get('users/logout');
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});
