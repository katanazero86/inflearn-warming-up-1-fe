import { Fragment } from 'react';
import { themeClass } from './theme.css.ts';
import {
  container,
  header,
  pokemonList,
  pokemonItem,
  pokemonImg,
  pokemonName,
  pokemonId,
  moreBtnWrap,
  moreBtn,
} from './App.styles.css.ts';
import { usePokemonApi } from './hooks/usePokemonApi.ts';
import { PokemonList } from './@types/pokemon/pokemon.types.ts';
import LoadingSpinner from './components/LoadingSpiner/LoadingSpinner.tsx';

export default function App() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    isLoading,
  } = usePokemonApi();

  if (isLoading && !data) return <p>Loading...</p>;
  if (status === 'error') return <p>Error: {error.message}</p>;

  const renderCard = (targetPage: PokemonList) => {
    return (
      <>
        {targetPage.results.map((item) => (
          <div key={item.url} className={pokemonItem}>
            <div
              style={{
                backgroundColor: `${item.species?.color.name}`,
                height: '8px',
                position: 'absolute',
                top: '12px',
                left: 0,
                right: 0,
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

  return (
    <>
      <div className={themeClass}>
        <div className={container}>
          <header className={header}>
            <h2>Pokemon</h2>
          </header>
          <div className={pokemonList}>
            {data &&
              data.pages.length !== 0 &&
              data.pages.map((page, i) => {
                return <Fragment key={i}>{renderCard(page)}</Fragment>;
              })}
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
    </>
  );
}
