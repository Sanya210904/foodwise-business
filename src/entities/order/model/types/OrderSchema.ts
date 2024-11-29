import { ORDER_CATEGORIES } from '../constants/OrderCategories';
import { Order } from './Order';

export type OrderSchema = {
  orders: Order[];
  orderFilter: ORDER_CATEGORIES;
  isLoading: OrderLoading;
  error: string | null;
};

type OrderLoading = {
  list: boolean;
  delete: boolean;
};
