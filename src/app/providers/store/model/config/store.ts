import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from '@src/features/auth';
import { productSlice } from '@src/entities/product';
import { shopSlice } from '@src/entities/shop';
import { orderCreateSlice } from '@src/features/order/createOrder';
import { orderSlice } from '@src/entities/order';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productSlice,
    shop: shopSlice,
    orders: orderSlice,
    orderCreate: orderCreateSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
