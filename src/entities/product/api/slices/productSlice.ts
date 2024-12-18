import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductSchema } from '../../model/types/ProductSchema';
import { fetchProducts } from '../services/fetchProducts';
import { fetchCreateProduct } from '@src/features/product/createProduct';
import { Product } from '../../model/types/Product';

const initialState: ProductSchema = {
  products: [],
  isLoading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      state.products.push(action.payload);
    },
    removeProduct(state, action: PayloadAction<string>) {
      const productId = action.payload;

      const currentProductIndex = state.products.findIndex(
        product => product._id === productId,
      );
      if (currentProductIndex === -1) return;

      state.products.splice(currentProductIndex, 1);
    },
  },
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
    builder.addCase(fetchCreateProduct.fulfilled, state => {
      state.isLoading = false;
    });
    builder.addCase(fetchCreateProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload?.error.message || null;
    });
  },
});

export default productSlice.reducer;
export const { addProduct, removeProduct } = productSlice.actions;
