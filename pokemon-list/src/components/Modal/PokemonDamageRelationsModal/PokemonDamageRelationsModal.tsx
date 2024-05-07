import { MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import {
  modalContainer,
  modalBody,
  modalHeader,
  modalTitle,
  damageRowContainer,
  damageRow,
  damageTitle,
} from './PokemonDamageRelationsModal.styles.css.ts';
import { PokemonType } from '../../../@types/pokemon/pokemonType.types.ts';
import CloseIcon from '../../icons/CloseIcon/CloseIcon.tsx';

interface PokemonDamageRelationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  pokemonType: PokemonType | undefined;
}

export default function PokemonDamageRelationsModal({
  isOpen,
  onClose,
  pokemonType,
}: PokemonDamageRelationsModalProps) {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleCloseClick = () => {
    onClose();
  };

  return (
    <>
      {isOpen &&
        createPortal(
          <div className={modalContainer} onClick={handleClick}>
            <div className={modalBody}>
              <header className={modalHeader}>
                <h2 className={modalTitle}>데미지 관계</h2>
                <CloseIcon onClick={handleCloseClick} />
              </header>
              <div className={damageRowContainer}>
                {pokemonType &&
                  pokemonType?.damage_relations.double_damage_from.length >
                    0 && (
                    <div className={damageRow}>
                      <p className={damageTitle}>Weak</p>
                      {pokemonType?.damage_relations.double_damage_from.map(
                        (o, i) => <p key={i}>{o.name}</p>,
                      )}
                    </div>
                  )}
                {pokemonType &&
                  pokemonType?.damage_relations.double_damage_to.length > 0 && (
                    <div className={damageRow}>
                      <p className={damageTitle}>Double Damage To</p>
                      {pokemonType?.damage_relations.double_damage_to.map(
                        (o, i) => <p key={i}>{o.name}</p>,
                      )}
                    </div>
                  )}
                {pokemonType &&
                  pokemonType?.damage_relations.half_damage_to.length > 0 && (
                    <div className={damageRow}>
                      <p className={damageTitle}>Half Damage To</p>
                      {pokemonType?.damage_relations.half_damage_to.map(
                        (o, i) => <p key={i}>{o.name}</p>,
                      )}
                    </div>
                  )}
                {pokemonType &&
                  pokemonType?.damage_relations.half_damage_from.length > 0 && (
                    <div className={damageRow}>
                      <p className={damageTitle}>Half Damage From</p>
                      {pokemonType?.damage_relations.half_damage_from.map(
                        (o, i) => <p key={i}>{o.name}</p>,
                      )}
                    </div>
                  )}
                {pokemonType &&
                  pokemonType?.damage_relations.no_damage_to.length > 0 && (
                    <div className={damageRow}>
                      <p className={damageTitle}>No Damage To</p>
                      {pokemonType?.damage_relations.no_damage_to.map(
                        (o, i) => <p key={i}>{o.name}</p>,
                      )}
                    </div>
                  )}
                {pokemonType &&
                  pokemonType?.damage_relations.no_damage_from.length > 0 && (
                    <div className={damageRow}>
                      <p className={damageTitle}>No Damage From</p>
                      {pokemonType?.damage_relations.no_damage_from.map(
                        (o, i) => <p key={i}>{o.name}</p>,
                      )}
                    </div>
                  )}
              </div>
            </div>
          </div>,
          document.getElementById('modal')!,
        )}
    </>
  );
}
