import { createAsyncThunk } from '@reduxjs/toolkit';
import { ServerError } from '@src/shared/types/ServerError';
import { baseApi } from '@src/shared/config/api/baseApi';
import { LoginRequest, LoginResponse } from '../../model/types/login';

export const fetchLogin = createAsyncThunk<
  LoginResponse,
  LoginRequest,
  { rejectValue: ServerError }
>('auth/login', async (data, { rejectWithValue }) => {
  try {
    const response = await baseApi.post('users/login', data);

    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    return rejectWithValue(error.response.data);
  }
});
