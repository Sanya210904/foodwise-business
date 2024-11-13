import { createAsyncThunk } from '@reduxjs/toolkit';
import { ServerError } from '@src/shared/types/ServerError';
import { baseApi } from '@src/shared/config/api/baseApi';
import { removeProduct } from '@src/entities/product/api/slices/productSlice';
import { AxiosResponse } from 'axios';
import {
  DeleteProductRequest,
  DeleteProductResponse,
} from '../../model/DeleteProduct';

export const fetchDeleteProduct = createAsyncThunk<
  DeleteProductResponse,
  DeleteProductRequest,
  { rejectValue: ServerError }
>('product/delete', async (id, { rejectWithValue, dispatch }) => {
  try {
    const response: AxiosResponse<DeleteProductResponse> = await baseApi.delete(
      `products/${id}`,
    );

    if (response.status !== 204) {
      throw new Error('Error while deleting product');
    }

    dispatch(removeProduct(id));
    console.log(response);

    return response.data;
  } catch (e: any) {
    return rejectWithValue(e.response.data);
  }
});
