import { useReducer } from 'react';

import { IStore, initialStore } from './model';
import { IAction, ActionType } from './actions';
import { reduceSetScrollPosition } from './setScrollPosition';
import { reduceSetSearchBarQuery } from './setSearchBarQuery';
import { reduceSetSearchBarTags } from './setSearchBarTags';
import { reduceSetDecks } from './setDecks';
import { reduceAppendDecks } from './appendDecks';
import { reduceSetLastLocation } from './setLastLocation';
import { reduceInitSubPage } from './initSubPage';


function reducer(state: IStore, action: IAction): IStore {
  switch (action.type) {
    case ActionType.SetScrollPosition:
      return reduceSetScrollPosition(state, action);
    case ActionType.SetSearchBarQuery:
      return reduceSetSearchBarQuery(state, action);
    case ActionType.SetSearchBarTags:
      return reduceSetSearchBarTags(state, action);
    case ActionType.SetDecks:
      return reduceSetDecks(state, action);
    case ActionType.AppendDecks:
      return reduceAppendDecks(state, action);
    case ActionType.SetLastLocation:
      return reduceSetLastLocation(state, action);
    case ActionType.InitSubPage:
      return reduceInitSubPage(state, action);
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
export * from './setDecks';
export * from './appendDecks';
export * from './setLastLocation';
export * from './initSubPage';
