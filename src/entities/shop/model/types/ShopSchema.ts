import { Shop } from './Shop';

export type ShopSchema = {
  shop: Shop;
  isLoading: boolean;
  error: string | null;
};
