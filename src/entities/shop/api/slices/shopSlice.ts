import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ShopSchema } from '../../model/types/ShopSchema';
import { Shop } from '../../model/types/Shop';
import { fetchShop } from '../services/fetchShop';
import { EditShopFields } from '@src/features/editShop/model/types/EditShopFields';
import { fetchEditShop } from '@src/features/editShop/api/services/fetchEditShop';

const initialState: ShopSchema = {
  shop: {} as Shop,
  isLoading: false,
  error: null,
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    clearShop: state => {
      state.shop = {} as Shop;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchShop.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchShop.fulfilled, (state, action) => {
      state.isLoading = false;
      state.shop = action.payload.data;
    });
    builder.addCase(fetchShop.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload?.error.message || null;
    });

    builder.addCase(fetchEditShop.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchEditShop.fulfilled, (state, action) => {
      const data = action.payload.data;
      state.shop.banner = data.shop_attributes.banner;
      state.shop.logo = data.shop_attributes.logo;
      state.shop.name = data.shop.name;
      state.shop.location.address = data.shop_attributes.location.address;
      state.shop.description = data.shop_attributes.description;

      state.isLoading = false;
    });
    builder.addCase(fetchEditShop.rejected, (state, action) => {
      state.isLoading = false;
      console.log('Error');
      console.log(action.payload);
      state.error = action.payload?.error.message || null;
    });
  },
});

export default shopSlice.reducer;
export const { clearShop } = shopSlice.actions;
