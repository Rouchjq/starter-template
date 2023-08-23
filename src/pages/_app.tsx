// providers
import { AppContextProvider } from '@/context/app/provider';
import { NextUIProvider } from '@nextui-org/react';

// styles
import '@/styles/variables.css';
import '@/styles/globals.css';

// types
import type { AppProps } from 'next/app';
import { NextPage } from 'next';

type MyAppProps = {};

const MyApp: NextPage<AppProps<MyAppProps>> = ({
  Component,
  pageProps: { ...pageProps },
}) => {
  return (
    <NextUIProvider>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </NextUIProvider>
  );
};

export default MyApp;
