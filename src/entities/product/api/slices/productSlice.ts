import { createSlice } from '@reduxjs/toolkit';
import { ProductSchema } from '../../model/types/ProductSchema';
import { fetchProducts } from '../services/fetchProducts';
import { fetchCreateProduct } from '@src/features/createProduct';

const initialState: ProductSchema = {
  products: [],
  isLoading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload?.error.message || null;
    });

    builder.addCase(fetchCreateProduct.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchCreateProduct.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(fetchCreateProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload?.error.message || null;
    });
  },
});

export default productSlice.reducer;
