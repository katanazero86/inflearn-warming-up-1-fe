'use client';

import { useSearchParams } from 'next/navigation';
import ProductList from '@/components/ProductList/ProductList';

export default function ProductsPage() {
  const queryParams = useSearchParams();
  const category = queryParams.get('category');
  return (
    <main className="relative">
      <ProductList category={category} />
    </main>
  );
}
