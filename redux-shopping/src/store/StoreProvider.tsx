'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { AppStoreType, makeStore } from '@/store/index';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStoreType>(makeStore());
  if (!storeRef.current) {
    storeRef.current = makeStore(); // create store instance
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
