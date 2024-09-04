import { RouterPath } from './index';
export const getProductPath = {
  productsDetail: (goodsId: number | string) =>
    RouterPath.productsDetail.replace(
      ':productId',
      typeof goodsId === 'number' ? goodsId.toString() : goodsId,
    ),
};
