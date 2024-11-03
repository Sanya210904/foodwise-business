import { createAsyncThunk } from '@reduxjs/toolkit';
import { ServerError } from '@src/shared/types/ServerError';
import { baseApi } from '@src/shared/config/api/baseApi';
import { LoginRequest, LoginResponse } from '../../model/types/login';
import { AxiosResponse } from 'axios';

export const fetchLogin = createAsyncThunk<
  LoginResponse,
  LoginRequest,
  { rejectValue: ServerError }
>('auth/login', async (data, { rejectWithValue }) => {
  try {
    const response: AxiosResponse<LoginResponse> = await baseApi.post(
      'users/login',
      data,
    );

    return response.data;
  } catch (error: any) {
    console.log(error);
    return rejectWithValue(error.response.data);
  }
});
