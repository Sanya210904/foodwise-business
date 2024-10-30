import { createSlice } from '@reduxjs/toolkit';
import { AuthSchema } from '../../model/types/AuthSchema';
import EncryptedStorage from 'react-native-encrypted-storage';
import { fetchLogin } from '../services/fetchLogin';
import { fetchLogout } from '../services/fetchLogout';
import { fetchAuthStatus } from '../services/fetchAuthStatus';

const initialState: AuthSchema = {
  isAuth: false,
  shopId: null,
  isLoading: false,
  isAppLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchLogin.pending, state => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      EncryptedStorage.setItem('token', action.payload.data.accessToken);
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload?.error.message || null;
    });

    builder.addCase(fetchLogout.pending, state => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(fetchLogout.fulfilled, state => {
      state.isLoading = false;
      state.isAuth = false;
      EncryptedStorage.removeItem('token');
    });
    builder.addCase(fetchLogout.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload?.error.message || null;
    });

    builder.addCase(fetchAuthStatus.pending, state => {
      state.isAppLoading = true;
    });
    builder.addCase(fetchAuthStatus.fulfilled, (state, action) => {
      state.isAppLoading = false;
      state.isAuth = true;
      EncryptedStorage.setItem('token', action.payload.data.accessToken);
      state.shopId = action.payload.data.shop._id;
    });
    builder.addCase(fetchAuthStatus.rejected, (state, action) => {
      state.isAppLoading = false;
      state.isAuth = false;
    });
  },
});

export default authSlice.reducer;
