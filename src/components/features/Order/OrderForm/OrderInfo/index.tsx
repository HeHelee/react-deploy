import { StarIcon } from '@chakra-ui/icons';
import { Divider, IconButton } from '@chakra-ui/react';
import styled from '@emotion/styled';
<<<<<<< HEAD
import axios from 'axios'; // axios 임포트

import { useAddWish } from '@/api/hooks/fetchWishList';
=======

>>>>>>> upstream/hehelee
import { useGetProductDetail } from '@/api/hooks/useGetProductDetail';
import { Button } from '@/components/common/Button';
import { Spacing } from '@/components/common/layouts/Spacing';
import type { OrderHistory } from '@/types';

import { HeadingText } from '../Common/HeadingText';
import { LabelText } from '../Common/LabelText';
import { CashReceiptFields } from '../Fields/CashReceiptFields';

type Props = {
  orderHistory: OrderHistory;
};
<<<<<<< HEAD

=======
>>>>>>> upstream/hehelee
export const OrderFormOrderInfo = ({ orderHistory }: Props) => {
  const { id, count } = orderHistory;

  const { data: detail } = useGetProductDetail({ productId: id.toString() });
  const totalPrice = detail.price * count;

<<<<<<< HEAD
  const addWish = useAddWish();

  const handleAddToFavorites = () => {
    addWish.mutate(id, {
      onSuccess: () => {
        alert('관심 상품으로 추가되었습니다!');
      },
      onError: (error) => {
        if (axios.isAxiosError(error)) {
          console.error('관심 상품 추가 중 오류 발생:', error.response?.data || error.message);
        } else {
          console.error('관심 상품 추가 중 오류 발생:', error.message);
        }
        alert('관심 상품 추가 중 오류가 발생했습니다.');
      },
    });
=======
  const handleAddToFavorites = () => {
    alert('관심 상품으로 추가되었습니다!');
>>>>>>> upstream/hehelee
  };

  return (
    <Wrapper>
      <Title>
        <HeadingText>결제 정보</HeadingText>
      </Title>
      <Divider color="#ededed" />
      <CashReceiptFields />
      <Divider color="#ededed" />
      <ItemWrapper>
        <LabelText>최종 결제금액</LabelText>
        <HeadingText>{totalPrice}원</HeadingText>
      </ItemWrapper>
      <Divider color="#ededed" />
      <Spacing height={32} />
      <IconButton
        icon={<StarIcon />}
        aria-label="Add to favorites"
        variant="outline"
        colorScheme="red"
        isRound
        mb={4}
        onClick={handleAddToFavorites}
      />
      <Button type="submit">{totalPrice}원 결제하기</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-left: 1px solid #ededed;
  border-right: 1px solid #ededed;
  padding: 16px;
`;

const Title = styled.h6`
  padding: 24px 0 20px;
`;

const ItemWrapper = styled.div`
  padding: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
