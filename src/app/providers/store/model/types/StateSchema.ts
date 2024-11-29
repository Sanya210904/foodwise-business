import { OrderSchema } from '@src/entities/order/model/types/OrderSchema';
import { ProductSchema } from '@src/entities/product/model/types/ProductSchema';
import { ShopSchema } from '@src/entities/shop/model/types/ShopSchema';
import { AuthSchema } from '@src/features/auth/model/types/AuthSchema';
import { OrderCreateSchema } from '@src/features/order/createOrder/model/types/OrderCreateSchema';

export type StateSchema = {
  auth: AuthSchema;
  products: ProductSchema;
  shop: ShopSchema;
  orders: OrderSchema;
  orderCreate: OrderCreateSchema;
};
