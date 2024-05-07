import { MouseEvent, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  modalContainer,
  modalBody,
  pokemonImgContainer,
  pokemonImg,
  pokemonProperty,
  pokemonInfo,
  infoItem,
  pokemonBasicStatus,
  pokemonBasicStatusItem,
  itemCol3,
  itemCol5,
  pokemonDescription,
  pokemonFlavorText,
  pokemonSprites,
} from './PokemonDetailModal.styles.css.ts';
import { PokemonListResult } from '../../../@types/pokemon/pokemon.types.ts';
import PokemonDamageRelationsModal from '../PokemonDamageRelationsModal/PokemonDamageRelationsModal.tsx';

interface PokemonDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  pokemon: PokemonListResult | null;
}

export default function PokemonDetailModal({
  isOpen,
  onClose,
  pokemon,
}: PokemonDetailModalProps) {
  const [isOpenDamageRelations, setIsOpenDamageRelations] = useState(false);

  console.log(pokemon);
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handlePokemonImageClick = () => {
    setIsOpenDamageRelations(true);
  };

  return (
    <>
      {isOpen &&
        createPortal(
          <div className={modalContainer} onClick={handleClick}>
            <div className={modalBody}>
              <div className={pokemonImgContainer}>
                <img
                  className={pokemonImg}
                  src={
                    pokemon?.detail?.sprites.other['official-artwork']
                      .front_default
                  }
                  onClick={handlePokemonImageClick}
                />
                <span
                  className={pokemonProperty}
                  style={{
                    backgroundColor: pokemon?.species?.color.name,
                  }}
                >
                  {pokemon?.detail?.types[0].type.name}
                </span>
              </div>
              <div className={pokemonInfo}>
                <div className={infoItem}>
                  몸무게
                  <br />
                  {pokemon?.detail?.weight}
                </div>
                <div className={infoItem}>
                  키
                  <br />
                  {pokemon?.detail?.height}
                </div>
                <div className={infoItem}>
                  기술
                  <br />
                  {pokemon?.detail?.abilities.map((ability) => (
                    <>
                      {ability.ability.name}
                      <br />
                    </>
                  ))}
                </div>
              </div>
              <div className={pokemonBasicStatus}>
                {pokemon?.detail?.stats.map((stat) => (
                  <div className={pokemonBasicStatusItem}>
                    <p className={itemCol3}>{stat.stat.name}</p>
                    <span style={{ width: 24 }}>{stat.base_stat}</span>
                    <progress
                      className={itemCol5}
                      max={999}
                      value={stat.base_stat}
                    />
                    <span>999</span>
                  </div>
                ))}
              </div>
              <div className={pokemonDescription}>
                <p>설명</p>
                <p className={pokemonFlavorText}>
                  {
                    pokemon?.species?.flavor_text_entries.find(
                      (flavorTextObj) => flavorTextObj.language.name === 'ko',
                    )?.flavor_text
                  }
                </p>
              </div>
              <div className={pokemonSprites}>
                <img src={pokemon?.detail?.sprites.front_default} />
                <img src={pokemon?.detail?.sprites.back_default} />
                <img src={pokemon?.detail?.sprites.front_shiny} />
                <img src={pokemon?.detail?.sprites.back_shiny} />
              </div>
            </div>
          </div>,
          document.getElementById('modal')!,
        )}
      <PokemonDamageRelationsModal
        isOpen={isOpenDamageRelations}
        onClose={() => setIsOpenDamageRelations(false)}
        pokemonType={pokemon?.type}
      />
    </>
  );
}
