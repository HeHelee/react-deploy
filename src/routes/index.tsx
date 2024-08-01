import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { Layout } from '@/components/features/Layout';
import { CategoryPage } from '@/pages/Category';
import CategoryAddPage from '@/pages/Category/CategoryAddPage'; 
import CategoryEditPage from '@/pages/Category/CategoryEditPage';
import FavoritesPage from '@/pages/FavoritesPage'; 
import { GoodsDetailPage } from '@/pages/Goods/Detail';
import ProductEditPage from '@/pages/Goods/Detail/ProductEditPage';
import { HomePage } from '@/pages/Home';
import { LoginPage } from '@/pages/Login';
import { MyAccountPage } from '@/pages/MyAccount';
import { OrderPage } from '@/pages/Order';
import SignUpPage from '@/pages/SignUp';

import { PrivateRoute } from './components/PrivateRoute';
import { RouterPath } from './path';

const router = createBrowserRouter([
  {
    path: RouterPath.root,
    element: <Layout />,
    children: [
      {
        path: RouterPath.home,
        element: <HomePage />,
      },
      {
        path: RouterPath.category,
        element: <CategoryPage />,
      },
      {
        path: RouterPath.addCategory, 
        element: <CategoryAddPage />,
      },
      {
        path: RouterPath.editCategory, 
        element: <CategoryEditPage />,
      },
      {
        path: RouterPath.editProduct, // 수정 페이지 라우트 추가
        element: <ProductEditPage />,
      },
      {
        path: RouterPath.productsDetail,
        element: <GoodsDetailPage />,
      },
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
        path: RouterPath.favorites, // favorites 경로 추가
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
  {
    path: RouterPath.login,
    element: <LoginPage />,
  },
  {
    path: RouterPath.signUp,
    element: <SignUpPage />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
