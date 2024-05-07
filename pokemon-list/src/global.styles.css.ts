import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  height: '100vh',
});

globalStyle('*', {
  boxSizing: 'border-box',
  fontFamily: `"Noto Sans KR", sans-serif`,
  fontWeight: 400,
});

globalStyle('h1, h2, h3, h4, h5, h6, p', {
  padding: 0,
  margin: 0,
});

globalStyle('button', {
  appearance: 'none',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: 'none',
});
