import { useReducer } from 'react';

import { IStore, initialStore } from './model';
import { IAction, ActionType } from './actions';
import { reduceSetScrollPosition } from './setScrollPosition';
import { reduceSetSearchBarQuery } from './setSearchBarQuery';
import { reduceSetSearchBarTags } from './setSearchBarTags';


function reducer(state: IStore, action: IAction): IStore {
  switch (action.type) {
    case ActionType.SetScrollPosition:
      return reduceSetScrollPosition(state, action);
    case ActionType.SetSearchBarQuery:
      return reduceSetSearchBarQuery(state, action);
    case ActionType.SetSearchBarTags:
      return reduceSetSearchBarTags(state, action);
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
export * from './setSearchBarQuery';
export * from './setSearchBarTags';