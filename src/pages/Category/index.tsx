import { Button, Center, HStack } from '@chakra-ui/react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import { useDeleteCategory } from '@/api/hooks/category/useDeleteCategory';
import { CategoryHeroSection } from '@/components/features/Category/CategoryHeroSection';
import { CategoryProductsSection } from '@/components/features/Category/CategoryProductsSection';
import { RouterPath } from '@/path';

import { useCurrentCategory } from './useCurrentCategory';

export const CategoryPage = () => {
  const { categoryId = '' } = useParams<{ categoryId: string }>();
  const { isRender, currentTheme } = useCurrentCategory({ categoryId });
  const navigate = useNavigate();
  const { mutate: deleteCategory } = useDeleteCategory();

  if (!isRender) return null;

  if (!currentTheme) {
    return <Navigate to={RouterPath.notFound} />;
  }

  const handleAddCategoryClick = () => {
    navigate(RouterPath.addCategory);
  };

  const handleEditCategoryClick = () => {
    navigate(RouterPath.editCategory.replace(':categoryId', categoryId));
  };

  const handleDeleteCategoryClick = () => {
    if (window.confirm('정말로 이 카테고리를 삭제하시겠습니까?')) {
      deleteCategory(categoryId);
    }
  };

  return (
    <>
      <CategoryHeroSection categoryId={categoryId} />
      <CategoryProductsSection categoryId={categoryId} />
      <Center height="100vh">
        <HStack spacing={4}>
          <Button colorScheme="blue" onClick={handleAddCategoryClick}>
            카테고리 추가
          </Button>
          <Button colorScheme="yellow" onClick={handleEditCategoryClick}>
            카테고리 수정
          </Button>
          <Button colorScheme="red" onClick={handleDeleteCategoryClick}>
            카테고리 삭제
          </Button>
        </HStack>
      </Center>
    </>
  );
};
