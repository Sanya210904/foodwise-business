import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderCreateSchema } from '../../model/types/OrderCreateSchema';
import { fetchCreateOrder } from '../services/fetchCreateOrder';

const initialState: OrderCreateSchema = {
  discount: '',
  discountPrice: null,
  quantity: '',
  expDate: '',

  isLoading: false,
  error: null,
};

const orderCreateSlice = createSlice({
  name: 'orderCreate',
  initialState,
  reducers: {
    setDiscount: (state, action: PayloadAction<string>) => {
      state.discount = action.payload;
    },
    setQuantity: (state, action: PayloadAction<string>) => {
      state.quantity = action.payload;
    },
    setExpDate: (state, action: PayloadAction<string>) => {
      state.expDate = action.payload;
    },
    setDiscountPrice: (state, action: PayloadAction<string | null>) => {
      state.discountPrice = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCreateOrder.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchCreateOrder.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(fetchCreateOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload?.error.message || null;
    });
  },
});

export default orderCreateSlice.reducer;
export const { setDiscount, setExpDate, setQuantity, setDiscountPrice } =
  orderCreateSlice.actions;
