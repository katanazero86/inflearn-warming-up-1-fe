import Image from 'next/image';

interface ProductListProps {
  category: string | null;
}

export default function ProductList({ category }: ProductListProps) {
  // TODO: category 에 따른 상품 fetch
  return (
    <section className="grid grid-cols-2 gap-2 py-3">
      {category}
      <div>
        <div>
          <Image
            src={'/img.png'}
            alt={'product-img'}
            objectFit={'cover'}
            sizes={'100vw'}
            width={0}
            height={0}
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      </div>
      <div>
        <div>
          <Image
            src={'/img.png'}
            alt={'product-img'}
            objectFit={'cover'}
            sizes={'100vw'}
            width={0}
            height={0}
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      </div>
    </section>
  );
}
