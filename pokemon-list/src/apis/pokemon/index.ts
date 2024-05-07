import { AxiosInstance, AxiosStatic } from 'axios';
import { PokemonList } from '../../@types/pokemon/pokemon.types.ts';
import { PokemonDetail } from '../../@types/pokemon/pokemonDetail.types.ts';

export const pokemonApis = (axiosInstance: AxiosInstance, _: AxiosStatic) => {
  return {
    async findPokemons(targetOffset: number) {
      try {
        const queryParams = new URLSearchParams({
          limit: '20',
          offset: `${targetOffset}`,
        });
        const res = await axiosInstance.get<PokemonList>(
          `/pokemon?${queryParams.toString()}`,
        );

        // detail
        const detailRes = await Promise.all(
          res.data.results.map((result) => {
            return axiosInstance.get(result.url);
          }),
        );

        // species
        const speciesRes = await Promise.all(
          detailRes.map((detail) => {
            return axiosInstance.get(detail.data.species.url);
          }),
        );

        res.data.results = res.data.results.map((data, i) => {
          data.detail = detailRes[i].data;
          data.species = speciesRes[i].data;
          return data;
        });

        return res.data;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
    async findPokemonById(targetId: number) {
      try {
        const res = await axiosInstance.get<PokemonDetail>(
          `/pokemon/${targetId}`,
        );
        return res.data;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
  };
};
