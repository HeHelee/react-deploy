import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { Layout } from '@/components/features/Layout';
import FavoritesPage from '@/pages/FavoritesPage';
import { HomePage } from '@/pages/Home';
import { MyAccountPage } from '@/pages/MyAccount';
import { OrderPage } from '@/pages/Order';

import { RouterPath } from '../path';
import { authRoutes } from './authRoutes';
import { categoryRoutes } from './categoryRoutes';
import { PrivateRoute } from './components/PrivateRoute';
import { productRoutes } from './productRoutes';

const mainRoutes = [
  {
    path: RouterPath.root,
    element: <Layout />,
    children: [
      {
        path: RouterPath.home,
        element: <HomePage />,
      },
      ...categoryRoutes,
      ...productRoutes,
      {
        path: RouterPath.myAccount,
        element: <PrivateRoute />,
        children: [
          {
            path: RouterPath.myAccount,
            element: <MyAccountPage />,
          },
        ],
      },
      {
        path: RouterPath.order,
        element: <PrivateRoute />,
        children: [
          {
            path: RouterPath.order,
            element: <OrderPage />,
          },
        ],
      },
      {
        path: RouterPath.favorites,
        element: <PrivateRoute />,
        children: [
          {
            path: RouterPath.favorites,
            element: <FavoritesPage />,
          },
        ],
      },
      {
        path: RouterPath.notFound,
        element: <Navigate to={RouterPath.home} />,
      },
    ],
  },
  ...authRoutes,
];

const router = createBrowserRouter(mainRoutes, {
  basename: '/react-deploy',
});

export const Routes = () => {
  return <RouterProvider router={router} />;
};
