import { MouseEvent } from 'react';
import Image from 'next/image';

interface ProductCardProps {
  imgUrl: string;
  name: string;
  price: number;
}

export default function ProductCard({ imgUrl, name, price }: ProductCardProps) {
  const handleAddCartClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    alert('Add cart clicked');
  };

  return (
    <div className="cursor-pointer">
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
        <div
          className="cursor-pointer w-[32px] absolute right-1 bottom-1"
          onClick={handleAddCartClick}
        >
          <img src={'/imgs/add_cart_img.png'} alt="add_cart_img" />
        </div>
      </div>
      <p className="text-base font-semibold mb-1 tracking-tight">{name}</p>
      <p className="text-sm text-right tracking-tight">{price.toLocaleString()}원</p>
    </div>
  );
}
