import { BottomTabRoute, Route } from '../types/Route';
import { RouteName } from './RouteName';

import { LoginPage } from '@src/pages/LoginPage';
import { MenuPage } from '@src/pages/MenuPage';
import { OrdersPage } from '@src/pages/OrdersPage';
import { ScannerPage } from '@src/pages/ScannerPage';
import { ProfilePage } from '@src/pages/ProfilePage';
import { CreateOrderPage } from '@src/pages/CreateOrderPage';
import { CreateProductPage } from '@src/pages/CreateProductPage';
import { EditShopPage } from '@src/pages/EditShopPage';

import MenuIcon from '@src/shared/assets/icons/menu-icon.svg';
import OrdersIcon from '@src/shared/assets/icons/orders-icon.svg';
import ScannerIcon from '@src/shared/assets/icons/scanner-icon.svg';
import ProfileIcon from '@src/shared/assets/icons/profile-icon.svg';

export const publicRoutes: Route[] = [
  {
    name: RouteName.AUTH,
    component: LoginPage,
  },
];

export const privateRoutes: Route[] = [
  {
    name: RouteName.CREATE_PRODUCT,
    component: CreateProductPage,
  },
  {
    name: RouteName.EDIT_SHOP,
    component: EditShopPage,
  },
  {
    name: RouteName.CREATE_ORDER,
    component: CreateOrderPage,
  },
];

export const bottomTabsRoutes: BottomTabRoute[] = [
  {
    name: RouteName.MENU,
    component: MenuPage,
    icon: MenuIcon,
    title: 'Menu',
  },
  {
    name: RouteName.ORDER,
    component: OrdersPage,
    icon: OrdersIcon,
    title: 'Orders',
  },
  {
    name: RouteName.SCANNER,
    component: ScannerPage,
    icon: ScannerIcon,
    title: 'Scanner',
  },
  {
    name: RouteName.PROFILE,
    component: ProfilePage,
    icon: ProfileIcon,
    title: 'Profile',
  },
];
