import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';

export const useProductsQuery = (category: string) => {
  let queryParams;
  if (category)
    queryParams = new URLSearchParams({
      category,
    });

  return useSWR(`/api/products${queryParams ? `?${queryParams.toString()}` : ''}`);
};

const getKey = (index: number, previousPageData: any) => {
  const LIMIT = 5;
  console.log(previousPageData, '???????', index);
  if (index === 0 && !previousPageData)
    return `/api/products?page=${index + 1}&offset=${(index + 1 - 1) * LIMIT}`;

  if (index !== 0 && previousPageData.products.totalPages === index) {
    return null;
  }
  return `/api/products?page=${index + 1}&offset=${(index + 1 - 1) * LIMIT}`;
};

export const useProductsInfinityQuery = (category: string) => {
  return useSWRInfinite(getKey);
};
