import { ActionType, IAction } from './actions';
import { IStore } from './model';

// Action
export interface SetSearchBarQueryAction {
  type: ActionType.SetSearchBarQuery;
  payload: {
    path: string;
    query: string;
  };
}

// Action Creator
export const setSearchBarQuery = (path: string, query: string): SetSearchBarQueryAction => ({
  type: ActionType.SetSearchBarQuery,
  payload: { path, query },
});

// User-Defined Type Guard
const isSetSearchBarQueryAction = (arg: any): arg is SetSearchBarQueryAction => {
  return arg !== null && typeof arg === 'object' && arg.type === ActionType.SetSearchBarQuery;
}

// Reducer
export const reduceSetSearchBarQuery = (state: IStore, action: IAction): IStore => {
  if (isSetSearchBarQueryAction(action)) {
    const query = action.payload.query;
    if (action.payload.path === '/home') {
      const searchBar = { ...state.homeTab.homePage.searchBar, query };
      const homePage = { ...state.homeTab.homePage, searchBar }
      const homeTab = { ...state.homeTab, homePage };
      return { ...state, homeTab };
    } else if (action.payload.path === '/search') {
      const searchBar = { ...state.searchTab.searchPage.searchBar, query };
      const searchPage = { ...state.searchTab.searchPage, searchBar }
      const searchTab = { ...state.searchTab, searchPage };
      return { ...state, searchTab };
    }
  }
  return state;
};
