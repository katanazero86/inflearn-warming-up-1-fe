import useSWR from 'swr';

export const useProductsQuery = (category: string) => {
  return useSWR(`/api/products?category=${category}`);
};
