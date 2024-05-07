import { style } from '@vanilla-extract/css';

export const modalContainer = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  zIndex: 1000,
});

export const modalBody = style({
  width: '100%',
  maxWidth: '768px',
  padding: '8px',
  borderRadius: 8,
  backgroundColor: '#ebebeb',
  position: 'relative',
});

export const pokemonImgContainer = style({
  textAlign: 'center',
  height: '100%',
  maxHeight: 250,
  marginBottom: 32,
  position: 'relative',
});

export const pokemonImg = style({
  width: '100%',
  height: 250,
  maxHeight: 250,
  objectFit: 'contain',
  cursor: 'pointer',
});

export const pokemonProperty = style({
  display: 'inline-block',
  padding: 8,
  color: '#949494',
  fontWeight: 600,
  borderRadius: '10px',
  position: 'absolute',
  bottom: '-32px',
  left: '50%',
  transform: 'translate(-50%, 0)',
});

export const pokemonInfo = style({
  display: 'flex',
  justifyContent: 'center',
  padding: '8px',
  textAlign: 'center',
});

export const infoItem = style({
  padding: '0 8px',
  letterSpacing: '-.3px',
  fontSize: '14px',
  width: 130,
  fontWeight: 600,
});

export const pokemonBasicStatus = style({
  textTransform: 'uppercase',
  fontSize: '14px',
  letterSpacing: '-.3px',
});

export const pokemonBasicStatusItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  padding: '4px 0',
});

export const itemCol3 = style({
  flex: '0 0 calc(100% * (3 / 12) - 16px)',
  textAlign: 'right',
});

export const itemCol5 = style({
  flex: '0 0 calc(100% * (5 / 12) - 16px)',
  textAlign: 'right',
});

export const pokemonDescription = style({
  marginTop: 16,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  fontSize: '18px',
});

export const pokemonFlavorText = style({
  padding: '8px 0',
  letterSpacing: '-.3px',
  fontWeight: 500,
});

export const pokemonSprites = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 96,
});

export const moveRight = style({
  position: 'absolute',
  cursor: 'pointer',
  top: '50%',
  right: 0,
});

export const moveLeft = style({
  position: 'absolute',
  cursor: 'pointer',
  top: '50%',
  left: 0,
});
