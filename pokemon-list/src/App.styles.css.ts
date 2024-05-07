import { style } from '@vanilla-extract/css';
import { vars } from './theme.css.ts';

export const container = style({});

export const header = style({
  padding: vars.space.lg,
  borderBottom: '1px solid #bababa',
  marginBottom: vars.space.md,
  color: '#2e2e2e',
  fontSize: vars.font.lg,
  letterSpacing: '-.5px',
});

export const pokemonList = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: vars.space.sm,
  flexWrap: 'wrap',
  padding: vars.space.md,
  maxWidth: 1024,
  margin: '0 auto',
});

export const pokemonItem = style({
  flex: `0 0 calc(${vars.flex.col3} - ${vars.space.sm})`,
  width: `calc(${vars.flex.col3} - ${vars.space.sm})`,
  position: 'relative',
  backgroundColor: '#dedede',
  borderRadius: '8px',
  cursor: 'pointer',
  ':hover': {
    transform: 'scale(1.03)',
    border: '1px solid #cfcfcf',
  },
});

export const pokemonImg = style({
  width: '100%',
  objectFit: 'cover',
});

export const pokemonName = style({
  letterSpacing: '-.3px',
  fontSize: vars.font.lg,
  padding: vars.space.sm,
});

export const pokemonId = style({
  textAlign: 'right',
  padding: vars.space.sm,
});

export const moreBtnWrap = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: 1024,
  margin: '0 auto',
  padding: `${vars.space.lg} 0`,
});

export const moreBtn = style({
  backgroundColor: '#6366f1',
  fontWeight: 600,
  fontSize: vars.font.md,
  color: 'white',
  padding: '12px 16px',
  borderRadius: '8px',
});
