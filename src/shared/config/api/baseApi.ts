import axios from 'axios';
import { API_URL } from '@env';

export const baseApi = axios.create({
  baseURL: API_URL,
});
