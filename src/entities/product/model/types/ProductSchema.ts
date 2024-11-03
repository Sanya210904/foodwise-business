import { Product } from './Product';

export type ProductSchema = {
  products: Product[];
  isLoading: boolean;
  error: string | null;
};
