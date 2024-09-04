import { getAuthPath } from './authPaths';
import { AuthRoutes } from './authRoutes';
import { getCategoryPath } from './categoryPaths';
import { CategoryRoutes } from './categoryRoutes';
import { getProductPath } from './productPaths';
import { ProductRoutes } from './productRoutes';

export const RouterPath = {
  root: '/',
  home: '/',
  myAccount: '/my-account',
  order: '/order',
  favorites: '/favorites',
  notFound: '*',
  ...CategoryRoutes,
  ...ProductRoutes,
  ...AuthRoutes,
};

export const getDynamicPath = {
  ...getCategoryPath,
  ...getProductPath,
  ...getAuthPath,
};
