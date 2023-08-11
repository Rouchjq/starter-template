// main tools
import { useMemo } from 'react';

// context
import { AppContext } from './context';

// styles
import 'react-toastify/dist/ReactToastify.css';

// types
import React, { FC, ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

type AppContextProviderProps = {
  children: ReactNode;
};

export const AppContextProvider: FC<AppContextProviderProps> = ({
  children,
}) => {
  const context = useMemo(() => {}, []);

  return (
    <AppContext.Provider value={context}>
      <ToastContainer closeOnClick theme='colored' position='top-center' />
      {children}
    </AppContext.Provider>
  );
};
