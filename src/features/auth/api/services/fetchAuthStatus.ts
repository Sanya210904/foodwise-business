import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_MAIN_URL } from '@env';
import axios from 'axios';

export const fetchAuthStatus = createAsyncThunk(
  'auth/checkAuth',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_MAIN_URL}/users/refresh`, {
        withCredentials: true,
      });

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);
