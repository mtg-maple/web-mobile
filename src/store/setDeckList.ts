import { ActionType, IAction } from './actions';
import { IStore, IDeckListItem, Page } from '../models';

// Action
export interface SetDeckListAction {
  type: ActionType.SetDeckList;
  payload: {
    targetPage: Page;
    decks: IDeckListItem[];
  };
}

// Action Creator
export const setDeckList = (targetPage: Page, decks: IDeckListItem[]): SetDeckListAction => ({
  type: ActionType.SetDeckList,
  payload: { targetPage, decks },
});

// User-Defined Type Guard
export const isSetDeckListAction = (arg: any): arg is SetDeckListAction => {
  return arg !== null && typeof arg === 'object' && arg.type === ActionType.SetDeckList;
}

// Reducer
export const reduceSetDeckList = (state: IStore, action: IAction): IStore => {
  if (isSetDeckListAction(action)) {
    const decks = action.payload.decks;
    if (action.payload.targetPage === Page.Home) {
      const homePage = { ...state.homePage, decks };
      return { ...state, homePage };
    } else if (action.payload.targetPage === Page.Search) {
      const searchPage = { ...state.searchPage, decks };
      return { ...state, searchPage };
    }
  }
  return state;
};
