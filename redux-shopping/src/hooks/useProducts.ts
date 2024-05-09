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

export const useProductsInfinityQuery = (category: string) => {
  const LIMIT = 5;

  return useSWRInfinite((index, previousPageData) => {
    console.log(previousPageData);
    console.log('index', index);
    return `/api/products?page=${index + 1}&offset=${(index - 1) * LIMIT}`;
  });
};
