import { RouterPath } from './index';
export const getCategoryPath = {
  category: (categoryId: string) => RouterPath.category.replace(':categoryId', categoryId),
};
