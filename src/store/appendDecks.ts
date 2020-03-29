import { ActionType, IAction } from './actions';
import { IStore, IDeckListItem } from './model';

// Action
export interface AppendDecksAction {
  type: ActionType.AppendDecks;
  payload: {
    tab: 'home' | 'search';
    decks: IDeckListItem[];
  };
}

// Action Creator
export const appendDecks = (tab: 'home' | 'search', decks: IDeckListItem[]): AppendDecksAction => ({
  type: ActionType.AppendDecks,
  payload: { tab, decks },
});

// User-Defined Type Guard
export const isAppendDecksAction = (arg: any): arg is AppendDecksAction => {
  return arg !== null && typeof arg === 'object' && arg.type === ActionType.AppendDecks;
}

// Reducer
export const reduceAppendDecks = (state: IStore, action: IAction): IStore => {
  if (isAppendDecksAction(action)) {
    const decks = action.payload.decks;
    switch(action.payload.tab) {
      case 'home':
        const myDecks = state.tabs.home.myDecks.concat(decks);
        const home = { ...state.tabs.home, myDecks };
        return { ...state, ...{ tabs: { ...state.tabs, home }} };
      case 'search':
        const resultDecks = state.tabs.search.resultDecks.concat(decks);
        const search = { ...state.tabs.search, resultDecks };
        return { ...state, ...{ tabs: { ...state.tabs, search }} };
      default:
        return state;
    }
  } else {
    return state;
  }
};
