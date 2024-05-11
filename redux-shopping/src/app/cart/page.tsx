'use client';

import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { removeCart, updateCart } from '@/store/cart/cartSlice';
import Button from '@/components/Forms/Button/Button';

export default function CartPage() {
  const carts = useAppSelector((state) => state.cartReducer.carts);
  const dispatch = useAppDispatch();

  const handleRemoveClick = (id: number) => () => {
    dispatch(removeCart(id));
  };

  const handleDecrementQuantityClick = (id: number, count: number) => () => {
    if (count - 1 > 0) {
      dispatch(updateCart({ id, count: count - 1 }));
    }
  };

  const handleIncrementQuantityClick = (id: number, count: number) => () => {
    if (count + 1 < 100) {
      dispatch(updateCart({ id, count: count + 1 }));
    }
  };

  return (
    <main className="relative">
      <h2 className="my-5 text-center font-bold text-xl">장바구니</h2>
      {carts.length === 0 ? (
        <div className="flex items-center flex-col py-8">
          <Image src="/imgs/no_searching_img.svg" width={55} height={55} alt={'no-cart'} />
          <p className="pt-4 text-sm tracking-tight">장바구니가 비어 있습니다 :)</p>
        </div>
      ) : (
        <>
          {carts.map((cart, index) => {
            return (
              <section key={cart.id} className="flex items-center">
                <img src={cart.imgUrl} alt={cart.name} className="w-32 object-cover mr-2" />
                <div className="tracking-tight flex-grow">
                  <p className="tracking-tight">{cart.name}</p>
                  <p>{cart.price.toLocaleString()} 원</p>
                  <p>quantity: {cart.count}</p>
                  <p>{(cart.price * cart.count).toLocaleString()}</p>
                </div>
                <div className="flex items-center px-2">
                  <Button size="sm" onClick={handleDecrementQuantityClick(cart.id, cart.count)}>
                    -
                  </Button>
                  <p className="px-2">{cart.count}</p>
                  <Button size="sm" onClick={handleIncrementQuantityClick(cart.id, cart.count)}>
                    +
                  </Button>
                </div>
                <div>
                  <Button
                    variant="outline"
                    size="sm"
                    color="secondary"
                    onClick={handleRemoveClick(cart.id)}
                  >
                    삭제
                  </Button>
                </div>
              </section>
            );
          })}
          <div>
            <p className="text-right font-semibold">
              합계: {carts.reduce((sum, cart) => sum + cart.price * cart.count, 0).toLocaleString()}{' '}
              원
            </p>
          </div>
        </>
      )}
    </main>
  );
}
