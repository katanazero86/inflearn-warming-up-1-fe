import { useInfiniteQuery } from '@tanstack/react-query';
import { repositories } from '../apis';

export const usePokemonApi = () => {
  return useInfiniteQuery({
    queryKey: ['pokemonGroup'],
    queryFn: ({ pageParam }) =>
      repositories.pokemonApis.findPokemons(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      return lastPage.next ? lastPageParam + 20 : null;
    },
  });
};
