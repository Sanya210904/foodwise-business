import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderSchema } from '../../model/types/OrderSchema';
import { ORDER_CATEGORIES } from '../../model/constants/OrderCategories';
import { fetchOrders } from '../services/fetchOrders';
import { fetchDeleteOrder } from '@src/features/order/deleteOrder/api/services/fetchDeleteOrder';
import { Order } from '../../model/types/Order';

const initialState: OrderSchema = {
  orders: [],
  orderFilter: ORDER_CATEGORIES.PROPS,
  isLoading: {
    list: false,
    delete: false,
  },
  error: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrderFilter: (state, action: PayloadAction<ORDER_CATEGORIES>) => {
      state.orderFilter = action.payload;
    },
    addOrder: (state, action: PayloadAction<Order>) => {
      const order = action.payload;
      if (state.orderFilter === ORDER_CATEGORIES.PROPS) {
        state.orders.push(order);
      }
    },
    deleteOrder: (state, action: PayloadAction<string>) => {
      const orderId = action.payload;

      const currentOrderIndex = state.orders.findIndex(
        order => order._id === orderId,
      );

      if (currentOrderIndex === -1) return;

      state.orders.splice(currentOrderIndex, 1);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchOrders.pending, state => {
      state.isLoading['list'] = true;
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.orders = action.payload.data;
      state.isLoading['list'] = false;
    });
    builder.addCase(fetchOrders.rejected, (state, action) => {
      state.isLoading['list'] = false;
      state.error = action.payload?.error.message || null;
    });

    builder.addCase(fetchDeleteOrder.pending, state => {
      state.isLoading['delete'] = true;
    });
    builder.addCase(fetchDeleteOrder.fulfilled, state => {
      state.isLoading['delete'] = false;
    });
    builder.addCase(fetchDeleteOrder.rejected, (state, action) => {
      state.isLoading['delete'] = false;
      state.error = action.payload?.error.message || null;
    });
  },
});

export default orderSlice.reducer;
export const { setOrderFilter, deleteOrder, addOrder } = orderSlice.actions;
