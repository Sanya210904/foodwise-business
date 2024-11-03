import { createAsyncThunk } from '@reduxjs/toolkit';
import { ServerError } from '@src/shared/types/ServerError';
import { baseApi } from '@src/shared/config/api/baseApi';
import {
  CreateProductFields,
  CreateProductResponse,
} from '../../model/types/CreateProduct';

export const fetchCreateProduct = createAsyncThunk<
  CreateProductResponse,
  CreateProductFields,
  { rejectValue: ServerError }
>('product/create', async (product, { rejectWithValue }) => {
  const formData = new FormData();

  formData.append('title', product.title);
  formData.append('price', product.price);
  formData.append('image', {
    uri: product.image,
    type: 'image/jpeg',
    name: 'product',
  } as unknown as Blob);

  console.log(formData);

  try {
    const response = await baseApi.postForm('products', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    console.log(response);
    return response.data;
  } catch (e: any) {
    return rejectWithValue(e.response.data);
  }
});
