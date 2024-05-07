import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { repositories } from '../apis';

export const usePokemonsApi = () => {
  return useInfiniteQuery({
    queryKey: ['pokemonGroup'],
    queryFn: ({ pageParam }) =>
      repositories.pokemonApis.findPokemons(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      return lastPage.next ? lastPageParam + 20 : null;
    },
    enabled: false,
  });
};

export const usePokemonApi = (targetPokemonName: string) => {
  return useQuery({
    queryKey: ['pokemon'],
    queryFn: () =>
      repositories.pokemonApis.findPokemonByName(targetPokemonName),
    enabled: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
