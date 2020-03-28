import { ActionType, IAction } from './actions';
import { IStore, ISearchTag } from './model';

// Action
export interface SetSearchBarTagsAction {
  type: ActionType.SetSearchBarTags;
  payload: {
    tab: 'home' | 'search';
    tags: ISearchTag[];
  };
}

// Action Creator
export const setSearchBarTags = (tab: 'home' | 'search', tags: ISearchTag[]): SetSearchBarTagsAction => ({
  type: ActionType.SetSearchBarTags,
  payload: { tab, tags },
});

// User-Defined Type Guard
const isSetSearchBarTagsAction = (arg: any): arg is SetSearchBarTagsAction => {
  return arg !== null && typeof arg === 'object' && arg.type === ActionType.SetSearchBarTags;
}

// Reducer
export const reduceSetSearchBarTags = (state: IStore, action: IAction): IStore => {
  if (isSetSearchBarTagsAction(action)) {
    const tags = action.payload.tags;
    switch(action.payload.tab) {
      case 'home':
        const home = { ...state.tabs.home, searchBar: { ...state.tabs.home.searchBar, tags } };
        return { ...state, ...{ tabs: { ...state.tabs, home }} };
      case 'search':
        const search = { ...state.tabs.search, searchBar: { ...state.tabs.search.searchBar, tags } };
        return { ...state, ...{ tabs: { ...state.tabs, search }} };
      default:
        return state;
    }
  } else {
    return state;
  }
};
