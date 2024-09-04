import { CategoryPage } from '@/pages/Category';
import CategoryAddPage from '@/pages/Category/CategoryAddPage';
import CategoryEditPage from '@/pages/Category/CategoryEditPage';

import { RouterPath } from '../path';

export const categoryRoutes = [
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
];
