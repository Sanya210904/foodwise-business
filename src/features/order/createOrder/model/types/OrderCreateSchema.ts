import { OrderCreateFields } from './Order';

export type OrderCreateSchema = OrderCreateFields & {
  discountPrice: string | null;

  isLoading: boolean;
  error: string | null;
};
