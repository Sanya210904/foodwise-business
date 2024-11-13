import { Shop } from '@src/entities/shop';

export type EditShopResponse = {
  data: {
    shop: { name: string };
    shop_attributes: Shop;
  };
};
