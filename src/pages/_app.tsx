import { NextUIProvider } from '@nextui-org/react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { AppContextProvider } from '@/context/app/provider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </NextUIProvider>
  );
}
