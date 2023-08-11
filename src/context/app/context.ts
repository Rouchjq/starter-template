import { createContext } from 'react';

type AppContextType = void;

export const AppContext = createContext<AppContextType>(undefined);
