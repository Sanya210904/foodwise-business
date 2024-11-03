import { Pagination } from '@src/shared/types/Pagination';
import { Product } from './Product';

export type FetchProductsResponse = {
  data: Product[];
  pagination: Pagination[];
};
