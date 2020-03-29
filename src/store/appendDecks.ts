import { ActionType, IAction } from './actions';
import { IStore, IDeckListItem } from './model';

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
      const decks = state.homeTab.homePage.decks.concat(newDecks);
      const homePage = { ...state.homeTab.homePage, decks };
      const homeTab = { ...state.homeTab, homePage };
      return { ...state, homeTab };
    } else if (action.payload.path === '/search') {
      const decks = state.searchTab.searchPage.decks.concat(newDecks);
      const searchPage = { ...state.searchTab.searchPage, decks };
      const searchTab = { ...state.searchTab, searchPage };
      return { ...state, searchTab };
    }
  }
  return state;
};
