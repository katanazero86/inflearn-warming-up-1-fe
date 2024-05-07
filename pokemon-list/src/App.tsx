import {
  Fragment,
  useState,
  MouseEvent,
  ChangeEvent,
  KeyboardEvent,
  useEffect,
} from 'react';
import { useQueryClient } from '@tanstack/react-query';
import {
  container,
  header,
  searchInput,
  pokemonList,
  pokemonItem,
  pokemonImg,
  pokemonName,
  pokemonId,
  moreBtnWrap,
  moreBtn,
} from './App.styles.css.ts';
import { usePokemonApi, usePokemonsApi } from './hooks/usePokemonApi.ts';
import {
  PokemonList,
  PokemonListResult,
} from './@types/pokemon/pokemon.types.ts';
import LoadingSpinner from './components/LoadingSpiner/LoadingSpinner.tsx';
import PokemonDetailModal from './components/Modal/PokemonDetailModal/PokemonDetailModal.tsx';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPokemonIndex, setSelectedPokemonIndex] = useState(-1);
  const [pageIndex, setPageIndex] = useState(-1);
  const [pokemon, setPokemon] = useState<PokemonListResult | null>(null);
  const [searchPokemonName, setSearchPokemonName] = useState('');

  const queryClient = useQueryClient();
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    isLoading,
    refetch: fetchPokemons,
  } = usePokemonsApi();

  const {
    data: searchData,
    refetch,
    isLoading: isPokemonSearchLoading,
  } = usePokemonApi(searchPokemonName);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchPokemonName(e.target.value.trim());
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (searchPokemonName !== '') refetch();
    }
  };

  const handlePokemonClick =
    (targetItem: PokemonListResult) => (e: MouseEvent<HTMLDivElement>) => {
      setPokemon(targetItem);
      setSelectedPokemonIndex(Number(e.currentTarget.dataset.pokemonIndex));
      setPageIndex(Number(e.currentTarget.dataset.pageIndex));
      setIsOpen(true);
    };

  const handleNextClick = () => {
    if (!data) return false;
    let targetPokemon = null;
    if (pageIndex + 1 < data!.pages.length && selectedPokemonIndex === 19) {
      targetPokemon = data!.pages[pageIndex + 1]?.results[0];
      setPageIndex(pageIndex + 1);
    } else {
      targetPokemon = data!.pages[pageIndex].results[selectedPokemonIndex + 1];
    }

    if (targetPokemon !== null && targetPokemon !== undefined) {
      setPokemon(targetPokemon);
      selectedPokemonIndex === 19
        ? setSelectedPokemonIndex(0)
        : setSelectedPokemonIndex(selectedPokemonIndex + 1);
    } else {
      return false;
    }
  };

  const handlePrevClick = () => {
    if (!data) return false;
    let targetPokemon = null;
    if (pageIndex - 1 !== -1 && selectedPokemonIndex === 0) {
      targetPokemon = data!.pages[pageIndex - 1].results[19];
      setPageIndex(pageIndex - 1);
    } else {
      targetPokemon = data!.pages[pageIndex].results[selectedPokemonIndex - 1];
    }

    if (targetPokemon !== null && targetPokemon !== undefined) {
      setPokemon(targetPokemon);
      selectedPokemonIndex === 0
        ? setSelectedPokemonIndex(19)
        : setSelectedPokemonIndex(selectedPokemonIndex - 1);
    } else {
      return false;
    }
  };

  const renderCard = (targetPage: PokemonList, i: number) => {
    return (
      <>
        {targetPage.results.map((item, index) => (
          <div
            key={item.url}
            className={pokemonItem}
            onClick={handlePokemonClick(item)}
            data-page-index={i}
            data-pokemon-index={index}
          >
            <div
              style={{
                backgroundColor: `${item.species?.color.name}`,
                height: '8px',
                margin: '12px 0',
              }}
            ></div>
            <img
              className={pokemonImg}
              src={item.detail?.sprites.front_default}
            />
            <p className={pokemonName}>
              {item.species?.names.filter(
                (obj) => obj.language.name === 'ko',
              )[0].name ?? item.name}
            </p>
            <p className={pokemonId}>#{item.detail?.id}</p>
          </div>
        ))}
      </>
    );
  };

  const handleTitleClick = () => {
    queryClient.removeQueries({
      queryKey: ['pokemonGroup'],
    });
    queryClient.resetQueries({
      queryKey: ['pokemon'],
    });
    fetchPokemons();
    setSearchPokemonName('');
  };

  useEffect(() => {
    if (searchData) {
      queryClient.resetQueries({
        queryKey: ['pokemonGroup'],
      });
    }
  }, [searchData]);

  useEffect(() => {
    fetchPokemons();
  }, []);

  if (isLoading && !data) return <p>Loading...</p>;
  if (status === 'error') return <p>Error: {error.message}</p>;

  return (
    <>
      <div>
        <div className={container}>
          <header className={header}>
            <h2
              onClick={handleTitleClick}
              style={{
                cursor: 'pointer',
              }}
            >
              Pokemon
            </h2>
            <input
              className={searchInput}
              onChange={handleChange}
              onKeyUp={handleKeyUp}
              value={searchPokemonName}
              placeholder="name or id"
            />
          </header>
          <div className={pokemonList}>
            {data &&
              data.pages.length !== 0 &&
              data.pages.map((page, i) => {
                return <Fragment key={i}>{renderCard(page, i)}</Fragment>;
              })}
            {searchData && (
              <div
                className={pokemonItem}
                onClick={handlePokemonClick(searchData)}
                data-page-index={-1}
                data-pokemon-index={-1}
              >
                <div
                  style={{
                    backgroundColor: `${searchData.species?.color.name}`,
                    height: '8px',
                    margin: '12px 0',
                  }}
                ></div>
                <img
                  className={pokemonImg}
                  src={searchData.detail?.sprites.front_default}
                />
                <p className={pokemonName}>
                  {searchData.species?.names.filter(
                    (obj: any) => obj.language.name === 'ko',
                  )[0].name ?? searchData.name}
                </p>
                <p className={pokemonId}>#{searchData.detail?.id}</p>
              </div>
            )}
          </div>
          {hasNextPage && (
            <div className={moreBtnWrap}>
              <button className={moreBtn} onClick={() => fetchNextPage()}>
                더보기
              </button>
            </div>
          )}
        </div>
      </div>
      {isFetchingNextPage && <LoadingSpinner />}
      {isPokemonSearchLoading && <LoadingSpinner />}
      <PokemonDetailModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        pokemon={pokemon}
        onPrev={handlePrevClick}
        onNext={handleNextClick}
      />
    </>
  );
}
