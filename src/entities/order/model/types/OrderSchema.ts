import { OrderCategories } from '../constants/OrderCategories';
import { Order } from './Order';

export type OrderSchema = {
  orders: Order[];
  orderFilter: OrderCategories;
  isLoading: boolean;
  error: string | null;
};
