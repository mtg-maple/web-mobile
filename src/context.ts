
import React from 'react';
import * as H from 'history';

type AppLocationContextProps = {
  lastLocation?: H.Location<H.History.PoorMansUnknown>
}
export const AppLocationContext =  React.createContext<AppLocationContextProps>({
  lastLocation: undefined,
});
