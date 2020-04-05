import { IStore, IDeckListItem } from '../models';
import { ActionType, IAction } from './actions';

// Action
export interface AppendDecksAction {
  type: ActionType.AppendDecks;
  payload: {
    path: string;
    decks: IDeckListItem[];
  };
}

// Action Creator
export const appendDecks = (path: string, decks: IDeckListItem[]): AppendDecksAction => ({
  type: ActionType.AppendDecks,
  payload: { path, decks },
});

// User-Defined Type Guard
export const isAppendDecksAction = (arg: any): arg is AppendDecksAction => {
  return arg !== null && typeof arg === 'object' && arg.type === ActionType.AppendDecks;
}

// Reducer
export const reduceAppendDecks = (state: IStore, action: IAction): IStore => {
  if (isAppendDecksAction(action)) {
    const newDecks = action.payload.decks;
    if (action.payload.path === '/home') {
      const decks = state.homePage.decks.concat(newDecks);
      const homePage = { ...state.homePage, decks };
      return { ...state, homePage };
    } else if (action.payload.path === '/search') {
      const decks = state.searchPage.decks.concat(newDecks);
      const searchPage = { ...state.searchPage, decks };
      return { ...state, searchPage };
    }
  }
  return state;
};
