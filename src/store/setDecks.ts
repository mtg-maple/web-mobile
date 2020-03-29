import { ActionType, IAction } from './actions';
import { IStore, IDeckListItem } from './model';

// Action
export interface SetDecksAction {
  type: ActionType.SetDecks;
  payload: {
    path: string;
    decks: IDeckListItem[];
  };
}

// Action Creator
export const setDecks = (path: string, decks: IDeckListItem[]): SetDecksAction => ({
  type: ActionType.SetDecks,
  payload: { path, decks },
});

// User-Defined Type Guard
export const isSetDecksAction = (arg: any): arg is SetDecksAction => {
  return arg !== null && typeof arg === 'object' && arg.type === ActionType.SetDecks;
}

// Reducer
export const reduceSetDecks = (state: IStore, action: IAction): IStore => {
  if (isSetDecksAction(action)) {
    const decks = action.payload.decks;
    if (action.payload.path === '/home') {
      const homePage = { ...state.homeTab.homePage, decks };
      const homeTab = { ...state.homeTab, homePage }
      return { ...state, homeTab };
    } else if (action.payload.path === '/search') {
      const searchPage = { ...state.searchTab.searchPage, decks };
      const searchTab = { ...state.searchTab, searchPage }
      return { ...state, searchTab };
    }
  }
  return state;
};
