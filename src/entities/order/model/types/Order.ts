import { NumberDecimal } from '@src/shared/types/NumberDecimal';

export type Order = {
  _id: string;
  product_id: string;
  price: NumberDecimal;
  discountPrice: NumberDecimal;
  image: string;
  discount: number;
  title: string;
  expiration_date: string;
  quantity: number;
};
