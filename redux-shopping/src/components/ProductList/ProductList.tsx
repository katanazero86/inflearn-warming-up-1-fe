'use client';
import { useSearchParams } from 'next/navigation';
import { useProductsInfinityQuery } from '@/hooks/useProducts';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import ProductCard from '@/components/ProductCard/ProductCard';
import ProductCardSkeleton from '@/components/ProductCard/ProductCardSkeleton/ProductCardSkeleton';
import { ProductsInfinity } from '@/@types/products';

export default function ProductList() {
  const queryParams = useSearchParams();
  const category = queryParams.get('category') ?? '0';

  const { data, isLoading, size, setSize } = useProductsInfinityQuery(category);

  const { observeRef } = useIntersectionObserver(
    () => {
      if (!!data && data[0].products.totalPages > size) setSize(size + 1);
    },
    {
      rootElement: null,
      rootMargin: '0px',
      threshold: 0.8,
    },
  );

  if (isLoading)
    return (
      <section className="grid grid-cols-2 gap-2 py-3">
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </section>
    );

  const renderProductCard = (targetData: ProductsInfinity[]) => {
    if (targetData.length > 0) {
      return (
        <>
          {targetData.map((o) =>
            o.products.products.map((product) => <ProductCard key={product.id} {...product} />),
          )}
        </>
      );
    } else {
      return <h2>No Data :)</h2>;
    }
  };

  return (
    <section className="grid grid-cols-2 gap-2 py-3">
      {data !== undefined && renderProductCard(data)}
      {!!data && data[0].products.totalPages > size && (
        <div ref={observeRef} style={{ height: 350 }}></div>
      )}
    </section>
  );
}
