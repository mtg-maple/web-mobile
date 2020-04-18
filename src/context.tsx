
import React, { FC, ReactNode } from 'react';
import * as H from 'history';

type AppLocationContextProps = {
  lastLocation?: H.Location<H.History.PoorMansUnknown>
}
export const AppLocationContext =  React.createContext<AppLocationContextProps>({
  lastLocation: undefined,
});

interface IAuthContext {
  authState?: string;
  authData?: object;
  onStateChange?: (state: string, data?: object) => void;
}

interface IAuthContextProvider extends IAuthContext {
  children: ReactNode;
}

export const AuthContext = React.createContext<IAuthContext>({
  authState: undefined,
  authData: undefined,
  onStateChange: undefined,
});

export const AuthContextProvider: FC<IAuthContextProvider> = ({ authState, authData, onStateChange, children }) => {
  return (
    <AuthContext.Provider value={{ authState, authData, onStateChange }}>
      {children}
    </AuthContext.Provider>
  );
};
