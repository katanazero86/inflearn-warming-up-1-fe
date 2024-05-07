import { PokemonDetail } from './pokemonDetail.types.ts';
import { PokemonSpecies } from './pokemonSpecies.types.ts';
import { PokemonType } from './pokemonType.types.ts';

export interface PokemonList {
  count: number;
  next: string;
  previous: string;
  results: PokemonListResult[];
}

export interface PokemonListResult {
  name: string;
  url: string;
  detail?: PokemonDetail;
  species?: PokemonSpecies;
  type: PokemonType;
}
