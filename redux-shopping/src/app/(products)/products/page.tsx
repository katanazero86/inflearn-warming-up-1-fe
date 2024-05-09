import ProductList from '@/components/ProductList/ProductList';
import { Suspense } from 'react';

export default function ProductsPage() {
  return (
    <main className="relative">
      <ProductList />
    </main>
  );
}
