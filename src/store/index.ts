import { useReducer } from 'react';

import { IStore } from '../models';
import { IAction, ActionType } from './actions';
import { reduceSetScrollPosition } from './setScrollPosition';
import { reduceSetSearchBarQuery } from './setSearchBarQuery';
import { reduceSetSearchBarTags } from './setSearchBarTags';
import { reduceSetDeck } from './setDeck';
import { reduceSetDeckList } from './setDeckList';
import { reduceAppendDecks } from './appendDecks';
import { reduceSetLastLocation } from './setLastLocation';
import { reduceInitSubPage } from './initSubPage';

export const initialStore: IStore = {
  homePage: {
    scrollPositionY: 0,
    searchBar: {
      query: '',
      tags: [],
    },
    decks: [],
  },
  deckPage: {
    scrollPositionY: 0,
    fromLocation: undefined,
    deck: undefined,
  },
  searchPage: {
    scrollPositionY: 0,
    searchBar: {
      query: '',
      tags: [],
    },
    decks: [],
  },
  userPage: {
    scrollPositionY: 0,
  },
  lastLocation: undefined,
};

function reducer(state: IStore, action: IAction): IStore {
  switch (action.type) {
    case ActionType.SetScrollPosition:
      return reduceSetScrollPosition(state, action);
    case ActionType.SetSearchBarQuery:
      return reduceSetSearchBarQuery(state, action);
    case ActionType.SetSearchBarTags:
      return reduceSetSearchBarTags(state, action);
    case ActionType.SetDeck:
      return reduceSetDeck(state, action);
    case ActionType.SetDeckList:
      return reduceSetDeckList(state, action);
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
export * from './setScrollPosition';
export * from './setSearchBarQuery';
export * from './setSearchBarTags';
export * from './setDeck';
export * from './setDeckList';
export * from './appendDecks';
export * from './setLastLocation';
export * from './initSubPage';
