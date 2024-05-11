import { Metadata } from 'next';
import Image from 'next/image';
import ProductDetailButtons from '@/components/ProductDetailButtons/ProductDetailButtons';
import { Product } from '@/@types/products';
import Link from 'next/link';
import Button from '@/components/Forms/Button/Button';
import BackButton from '@/components/BackButton/BackButton';

// false | 0 | number - default false
export const revalidate = 0; // SSR

export async function generateMetadata({ params }: ProductsDetailPageProps) {
  let metadata: Metadata = {};
  try {
    const res = await fetch(`http://localhost:3000/api/products/metadata/${params.id}`, {
      method: 'GET',
    });
    metadata = await res.json();
  } catch (e) {
    console.error(e);
  }

  return {
    ...metadata,
  };
}

interface ProductsDetailPageProps {
  params: {
    id: string;
  };
}

export default async function ProductsDetailPage({ params }: ProductsDetailPageProps) {
  const { id } = params;
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    method: 'GET',
  });
  const data: Product = await res.json();

  console.log(data);

  const getCategoryName = (id: number) => {
    switch (id) {
      case 2:
        return '전자기기';
      case 3:
        return '샐러드';
      case 4:
        return '신발';
    }
  };

  return (
    <main className="relative animate-fade">
      <BackButton />
      <p className="text-indigo-500 text-sm">카테고리 - {getCategoryName(data.categoryId)}</p>
      <Image
        src={data.imgUrl}
        alt={'product-img'}
        width={0}
        height={0}
        sizes={'100vw'}
        style={{ width: '100%', objectFit: 'cover' }}
      />
      <h2 className="text-xl font-semibold">{data.name}</h2>
      <p className="text-right">{data.price.toLocaleString()} 원</p>
      <div>상품 설명...</div>
      <ProductDetailButtons {...data} />
    </main>
  );
}
