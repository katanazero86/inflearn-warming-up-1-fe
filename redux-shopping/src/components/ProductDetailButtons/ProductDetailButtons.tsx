'use client';

import Button from '@/components/Forms/Button/Button';
import { Product } from '@/@types/products';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addCart, CartPayload } from '@/store/cart/cartSlice';

interface ProductDetailButtonsProps extends Product {}

export default function ProductDetailButtons({
  categoryId,
  id,
  imgUrl,
  name,
  price,
}: ProductDetailButtonsProps) {
  const carts = useAppSelector((state) => state.cartReducer.carts);
  const dispatch = useAppDispatch();

  const handleAddCartClick = () => {
    if (carts.findIndex((cart) => cart.id === id) === -1) {
      dispatch(
        addCart({
          id,
          count: 1,
          name,
          imgUrl,
          price,
        }),
      );
    }
  };

  return (
    <div className="flex items-center gap-2 mt-2">
      <Button
        variant={'outline'}
        color={'secondary'}
        wFull={true}
        onClick={handleAddCartClick}
        disabled={carts.length > 0 && carts.findIndex((cart) => cart.id === id) !== -1}
      >
        {carts.length > 0 && carts.findIndex((cart) => cart.id === id) !== -1
          ? '이미 담은 상품'
          : '장바구니'}
      </Button>
      <Button variant={'default'} color={'primary'} wFull={true}>
        구매하기
      </Button>
    </div>
  );
}
