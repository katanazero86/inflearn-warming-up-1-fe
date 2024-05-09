'use client';
import { useSearchParams } from 'next/navigation';
import { useProductsQuery, useProductsInfinityQuery } from '@/hooks/useProducts';
import ProductCard from '@/components/ProductCard/ProductCard';
import ProductCardSkeleton from '@/components/ProductCard/ProductCardSkeleton/ProductCardSkeleton';

export default function ProductList() {
  // TODO: category 에 따른 상품 fetch
  const queryParams = useSearchParams();
  const category = queryParams.get('category') ?? '0';

  const { data, isLoading, error } = useProductsQuery(category);

  const { data: test, isLoading: testLoading, size, setSize } = useProductsInfinityQuery(category);

  if (isLoading)
    return (
      <section className="grid grid-cols-2 gap-2 py-3">
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </section>
    );

  console.log(test);
  console.log(size, 'size!!');

  return (
    <section className="grid grid-cols-2 gap-2 py-3">
      {data !== undefined &&
        data.data.products?.length > 0 &&
        data.data.products.map(
          (product: { id: string; name: string; imgUrl: string; price: number }) => (
            <ProductCard key={product.id} {...product} />
          ),
        )}
      <button onClick={() => setSize(size + 1)}>더 보기</button>
    </section>
  );
}
