import { Route } from '../types/Route';
import { RouteName } from './RouteName';
import LoginPage from '@src/pages/LoginPage/LoginPage';
import MenuPage from '@src/pages/MenuPage/MenuPage';

export const publicRoutes: Route[] = [
  {
    name: RouteName.Auth,
    component: LoginPage,
  },
];

export const privateRoutes: Route[] = [
  {
    name: RouteName.Menu,
    component: MenuPage,
  },
];
