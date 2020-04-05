import { ActionType, IAction } from './actions';
import { IStore, IDeckListItem } from '../models';

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
      const homePage = { ...state.homePage, decks };
      return { ...state, homePage };
    } else if (action.payload.path === '/search') {
      const searchPage = { ...state.searchPage, decks };
      return { ...state, searchPage };
    }
  }
  return state;
};
