export type LoginResponse = {
  data: {
    accessToken: string;
    refreshToken: string;
    // shop: IShop;
    // shop_attributes: IShopAttr;
  };
};

export type LoginRequest = {
  email: string;
  password: string;
};
