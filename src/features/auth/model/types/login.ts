import { Shop, ShopParams } from '@src/entities/shop';

export type LoginResponse = {
  data: {
    accessToken: string;
    refreshToken: string;
    shop: Shop;
    shop_attributes: ShopParams;
  };
};

export type LoginRequest = {
  email: string;
  password: string;
};
