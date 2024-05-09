'use client';
import { SWRConfig } from 'swr';
import axios from 'axios';

export default function SWRConfigContext({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateOnMount: true,
        fetcher: (url: string) => axios.get(url).then((res) => res.data),
      }}
    >
      {children}
    </SWRConfig>
  );
}
