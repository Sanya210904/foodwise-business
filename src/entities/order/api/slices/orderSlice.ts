import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderSchema } from '../../model/types/OrderSchema';
import { OrderCategories } from '../../model/constants/OrderCategories';
import { fetchOrders } from '../services/fetchOrders';

const initialState: OrderSchema = {
  orders: [],
  orderFilter: OrderCategories.PROPS,
  isLoading: false,
  error: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrderFilter: (state, action: PayloadAction<OrderCategories>) => {
      state.orderFilter = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchOrders.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.orders = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(fetchOrders.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload?.error.message || null;
    });
  },
});

export default orderSlice.reducer;
export const { setOrderFilter } = orderSlice.actions;
