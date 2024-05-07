import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  space: {
    none: '0px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  flex: {
    col1: 'calc(100% * (1 / 12))',
    col2: 'calc(100% * (2 / 12))',
    col3: 'calc(100% * (3 / 12))',
    col4: 'calc(100% * (4 / 12))',
    col5: 'calc(100% * (5 / 12))',
    col6: 'calc(100% * (6 / 12))',
    col7: 'calc(100% * (7 / 12))',
    col8: 'calc(100% * (8 / 12))',
    col9: 'calc(100% * (9 / 12))',
    col10: 'calc(100% * (10 / 12))',
    col11: 'calc(100% * (11 / 12))',
    col12: '100%',
  },
  font: {
    sm: '12px',
    md: '16px',
    lg: '20px',
    xl: '24px',
  },
});
