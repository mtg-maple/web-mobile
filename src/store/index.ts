import { useReducer } from 'react';

import { IStore, initialStore } from './model';
import { IAction, ActionType } from './actions';
import { reduceSetScrollPosition } from './setScrollPosition';


function reducer(state: IStore, action: IAction): IStore {
  switch (action.type) {
    case ActionType.SetScrollPosition:
      return reduceSetScrollPosition(state, action);
    default:
      return state;
  }
}

const useStore = () => {
  return useReducer(reducer, initialStore);
};

export default useStore;
export * from './actions';
export * from './model';
export * from './setScrollPosition';

