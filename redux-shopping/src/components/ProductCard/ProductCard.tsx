import Image from 'next/image';

interface ProductCardProps {
  imgUrl: string;
  name: string;
  price: number;
}

export default function ProductCard({ imgUrl, name, price }: ProductCardProps) {
  return (
    <div>
      <div className="mb-2">
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
      </div>
      <p className="text-base font-semibold mb-1 tracking-tight">{name}</p>
      <p className="text-sm text-right tracking-tight">{price.toLocaleString()}원</p>
    </div>
  );
}
