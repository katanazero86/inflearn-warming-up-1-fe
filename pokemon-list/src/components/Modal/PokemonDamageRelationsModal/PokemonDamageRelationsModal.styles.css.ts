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
});

export const modalHeader = style({
  width: '100%',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px 0',
});

export const modalTitle = style({
  fontSize: '24px',
  fontWeight: 700,
});

export const damageRowContainer = style({
  display: 'flex',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  gap: 8,
});

export const damageRow = style({
  padding: '8px',
  flex: '0 0 calc(100% * (6 / 12) - 8px)',
});

export const damageTitle = style({
  fontSize: '18px',
  letterSpacing: '-.3px',
  fontWeight: 600,
});
