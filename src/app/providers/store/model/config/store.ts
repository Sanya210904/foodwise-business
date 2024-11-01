import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '@src/features/auth';
import { productSlice } from '@src/entities/product';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
