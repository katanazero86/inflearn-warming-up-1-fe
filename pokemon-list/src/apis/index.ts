import { pokemonApis } from './pokemon';
import { axiosInstance, axios } from '../utils/axios.utils.ts';

const repositories = {
  pokemonApis: pokemonApis(axiosInstance, axios),
};
Object.freeze(repositories);

export { repositories };
