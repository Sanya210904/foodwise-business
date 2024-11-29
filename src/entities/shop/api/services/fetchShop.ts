import { createAsyncThunk } from '@reduxjs/toolkit';
import { ServerError } from '@src/shared/types/ServerError';
import { baseApi } from '@src/shared/config/api/baseApi';
import { AxiosResponse } from 'axios';
import { FetchShopResponse } from '../../model/types/FetchShop';

export const fetchShop = createAsyncThunk<
  FetchShopResponse,
  undefined,
  { rejectValue: ServerError }
>('shop/getSelf', async (_, { rejectWithValue }) => {
  try {
    const response: AxiosResponse<FetchShopResponse> =
      await baseApi.get('shops/self');

    return response.data;
  } catch (error: any) {
    console.log(error);
    return rejectWithValue(error.response.data);
  }
});
