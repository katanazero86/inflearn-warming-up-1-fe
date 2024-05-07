import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './global.styles.css.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { themeClass } from './theme.css.ts';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className={themeClass}>
        <App />
      </div>
    </QueryClientProvider>
  </React.StrictMode>,
);
