import { createAsyncThunk } from '@reduxjs/toolkit';
import { ServerError } from '@src/shared/types/ServerError';
import { EditShopFields } from '../../model/types/EditShopFields';
import { baseApi } from '@src/shared/config/api/baseApi';
import { AxiosResponse } from 'axios';
import { EditShopResponse } from '../../model/types/EditShop';

export const fetchEditShop = createAsyncThunk<
  EditShopResponse,
  EditShopFields,
  { rejectValue: ServerError }
>('shop/changeShop', async (shop, { rejectWithValue }) => {
  try {
    const formData = new FormData();

    formData.append('name', shop.name);
    formData.append('address', shop.address);
    formData.append('description', shop.info);
    formData.append('banner', {
      uri: shop.banner,
      type: 'image/jpeg',
      name: 'shop-banner',
    } as unknown as Blob);
    formData.append('logo', {
      uri: shop.logo,
      type: 'image/jpeg',
      name: 'shop-logo',
    } as unknown as Blob);

    const response: AxiosResponse<EditShopResponse> = await baseApi.putForm(
      'shops',
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      },
    );

    if (response.status !== 200) {
      throw new Error('Error while updating shop params');
    }

    return response.data;
  } catch (error: any) {
    console.log(error);
    return rejectWithValue(error?.message);
  }
});
