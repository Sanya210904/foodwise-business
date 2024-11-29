import { Order } from '@src/entities/order/model/types/Order';

export type FetchCreateOrderRequest = {
  product_id: string;
  discount: number;
  quantity: number;
  expiration_date: string;
};

export type FetchCreateOrderResponse = {
  data: Order;
};
