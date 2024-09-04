import { GoodsDetailPage } from '@/pages/Goods/Detail';
import ProductAddPage from '@/pages/Goods/Detail/ProductAddPage';
import ProductEditPage from '@/pages/Goods/Detail/ProductEditPage';

import { RouterPath } from '../path';

export const productRoutes = [
  {
    path: RouterPath.addProduct,
    element: <ProductAddPage />,
  },
  {
    path: RouterPath.productsDetail,
    element: <GoodsDetailPage />,
  },
  {
    path: RouterPath.editProduct,
    element: <ProductEditPage />,
  },
];
