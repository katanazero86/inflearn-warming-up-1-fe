'use client';

import CartIcon from '@/components/Icons/CartIcon/CartIcon';
import { useAppSelector } from '@/store/hooks';
import { useRouter } from 'next/navigation';

export default function CartContainer() {
  const router = useRouter();
  const carts = useAppSelector((state) => state.cartReducer.carts);

  const handleCartClick = () => {
    router.push('/cart');
  };

  return (
    <div className="relative" onClick={handleCartClick}>
      {carts.length > 0 && (
        <span className="absolute bg-indigo-300 rounded-full w-4 h-4 text-xs font-semibold text-center left-[18px]">
          {carts.length}
        </span>
      )}
      <CartIcon />
    </div>
  );
}
