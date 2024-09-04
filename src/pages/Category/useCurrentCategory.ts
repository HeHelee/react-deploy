import { useMemo } from 'react';

import { useGetCategories } from '@/api/hooks/category/useGetCategorys';
import { getCurrentCategory } from '@/components/features/Category/CategoryHeroSection';

type Props = { categoryId: string };

export const useCurrentCategory = ({ categoryId }: Props) => {
  const { data, isLoading, isError } = useGetCategories();

  const isRender = useMemo(() => {
    if (isLoading || isError) return false;
    if (!data) return false;
    return true;
  }, [data, isLoading, isError]);

  const currentTheme = useMemo(
    () => getCurrentCategory(categoryId, data ?? []),
    [categoryId, data],
  );

  return {
    isRender,
    currentTheme,
  };
};
