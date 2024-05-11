import { MouseEvent } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { addCart } from '@/store/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

interface ProductCardProps {
  id: number;
  categoryId: number;
  imgUrl: string;
  name: string;
  price: number;
}

export default function ProductCard({ id, imgUrl, name, price, ...rest }: ProductCardProps) {
  const carts = useAppSelector((state) => state.cartReducer.carts);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleAddCartClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
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
    }
  };

  const handleProductClick = () => {
    router.push(`/products/${id}`);
  };

  return (
    <div className="cursor-pointer" onClick={handleProductClick}>
      <div className="mb-2 relative">
        <Image
          src={imgUrl}
          alt={'product-img'}
          sizes={'100vw'}
          width={0}
          height={0}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
          }}
        />
        <div className="cursor-pointer w-[32px] absolute right-1 bottom-1">
          <img src={'/imgs/add_cart_img.png'} alt="add_cart_img" onClick={handleAddCartClick} />
        </div>
      </div>
      <p className="text-base font-semibold mb-1 tracking-tight">{name}</p>
      <p className="text-sm text-right tracking-tight">{price.toLocaleString()}원</p>
    </div>
  );
}
