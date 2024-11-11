import { Product } from '@src/entities/product/model/types/Product';

export type CreateProductFields = {
  title: string;
  image: string;
  price: string;
};

export type CreateProductResponse = {
  data: Product;
};
