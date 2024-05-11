import useSWR, { unstable_serialize } from 'swr';
import useSWRInfinite from 'swr/infinite';
import { ProductsInfinity } from '@/@types/products';

export const useProductsDetailQuery = (id: string) => {
  return useSWR(`/api/products/${id}`);
};

const getKey = (
  index: number,
  previousPageData: ProductsInfinity | null,
  category: string | null,
) => {
  const LIMIT = 5;

  const queryParams = new URLSearchParams({
    page: `${index + 1}`,
    offset: `${(index + 1 - 1) * LIMIT}`,
  });

  if (category !== null && category !== '') queryParams.append('category', category);

  if (index === 0 && !previousPageData) return `/api/products?${queryParams.toString()}`;

  if (index !== 0 && previousPageData?.products.totalPages === index) {
    return null;
  }
  return `/api/products?${queryParams.toString()}`;
};

export const useProductsInfinityQuery = (category: string | null) => {
  return useSWRInfinite<ProductsInfinity>(
    (index, previousPageData) => getKey(index, previousPageData, category),
    {
      initialSize: 1,
      revalidateFirstPage: false,
    },
  );
};
