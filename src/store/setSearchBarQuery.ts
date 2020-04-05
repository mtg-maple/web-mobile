import { IStore, Page } from '../models';
import { ActionType, IAction } from './actions';

// Action
export interface SetSearchBarQueryAction {
  type: ActionType.SetSearchBarQuery;
  payload: {
    targetPage: Page;
    query: string;
  };
}

// Action Creator
export const setSearchBarQuery = (targetPage: Page, query: string): SetSearchBarQueryAction => ({
  type: ActionType.SetSearchBarQuery,
  payload: { targetPage, query },
});

// User-Defined Type Guard
const isSetSearchBarQueryAction = (arg: any): arg is SetSearchBarQueryAction => {
  return arg !== null && typeof arg === 'object' && arg.type === ActionType.SetSearchBarQuery;
}

// Reducer
export const reduceSetSearchBarQuery = (state: IStore, action: IAction): IStore => {
  if (isSetSearchBarQueryAction(action)) {
    const query = action.payload.query;
    if (action.payload.targetPage === Page.Home) {
      const searchBar = { ...state.homePage.searchBar, query };
      const homePage = { ...state.homePage, searchBar }
      return { ...state, homePage };
    } else if (action.payload.targetPage === Page.Search) {
      const searchBar = { ...state.searchPage.searchBar, query };
      const searchPage = { ...state.searchPage, searchBar }
      return { ...state, searchPage };
    }
  }
  return state;
};
