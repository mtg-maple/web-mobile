import { ActionType, IAction } from './actions';
import { IStore, IDeckListItem } from './model';

// Action
export interface SetDecksAction {
  type: ActionType.SetDecks;
  payload: {
    tab: 'home' | 'search';
    decks: IDeckListItem[];
  };
}

// Action Creator
export const setDecks = (tab: 'home' | 'search', decks: IDeckListItem[]): SetDecksAction => ({
  type: ActionType.SetDecks,
  payload: { tab, decks },
});

// User-Defined Type Guard
export const isSetDecksAction = (arg: any): arg is SetDecksAction => {
  return arg !== null && typeof arg === 'object' && arg.type === ActionType.SetDecks;
}

// Reducer
export const reduceSetDecks = (state: IStore, action: IAction): IStore => {
  if (isSetDecksAction(action)) {
    const decks = action.payload.decks;
    switch(action.payload.tab) {
      case 'home':
        const home = { ...state.tabs.home, myDecks: decks };
        return { ...state, ...{ tabs: { ...state.tabs, home }} };
      case 'search':
        const search = { ...state.tabs.search, resultDecks: decks };
        return { ...state, ...{ tabs: { ...state.tabs, search }} };
      default:
        return state;
    }
  } else {
    return state;
  }
};
