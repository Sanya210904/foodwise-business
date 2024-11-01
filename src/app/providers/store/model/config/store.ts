import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '@src/features/auth';
import { shopSlice } from '@src/entities/shop';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    shop: shopSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
