import { ActionType, IAction } from './actions';
import { IStore } from './model';

// Action
export interface SetSearchBarQueryAction {
  type: ActionType.SetSearchBarQuery;
  payload: {
    tab: 'home' | 'search';
    query: string;
  };
}

// Action Creator
export const setSearchBarQuery = (tab: 'home' | 'search', query: string): SetSearchBarQueryAction => ({
  type: ActionType.SetSearchBarQuery,
  payload: { tab, query },
});

// User-Defined Type Guard
const isSetSearchBarQueryAction = (arg: any): arg is SetSearchBarQueryAction => {
  return arg !== null && typeof arg === 'object' && arg.type === ActionType.SetSearchBarQuery;
}

// Reducer
export const reduceSetSearchBarQuery = (state: IStore, action: IAction): IStore => {
  if (isSetSearchBarQueryAction(action)) {
    const query = action.payload.query;
    switch(action.payload.tab) {
      case 'home':
        const home = { ...state.tabs.home, searchBar: { ...state.tabs.home.searchBar, query } };
        return { ...state, ...{ tabs: { ...state.tabs, home }} };
      case 'search':
        const search = { ...state.tabs.search, searchBar: { ...state.tabs.search.searchBar, query } };
        return { ...state, ...{ tabs: { ...state.tabs, search }} };
      default:
        return state;
    }
  } else {
    return state;
  }
};
