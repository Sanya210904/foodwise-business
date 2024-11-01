import { createSlice } from '@reduxjs/toolkit';
import { ShopSchema } from '../../model/types/ShopSchema';
import { Shop } from '../../model/types/Shop';
import { fetchShop } from '../services/fetchShop';

const initialState: ShopSchema = {
  shop: {} as Shop,
  isLoading: false,
  error: null,
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {},
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
  },
});

export default shopSlice.reducer;
