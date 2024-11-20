import { RouteName } from '../constants/RouteName';

export type TypeRootStackParamsList = {
  [RouteName.AUTH]: undefined;
  [RouteName.MENU]: undefined;
  [RouteName.ORDER]: undefined;
  [RouteName.SCANNER]: undefined;
  [RouteName.PROFILE]: undefined;
  [RouteName.CREATE_PRODUCT]: undefined;
  [RouteName.EDIT_SHOP]: undefined;
  [RouteName.CREATE_ORDER]: {
    id: string;
    image: string;
    title: string;
    price: string;
  };
};
