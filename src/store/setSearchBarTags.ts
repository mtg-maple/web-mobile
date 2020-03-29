import { ActionType, IAction } from './actions';
import { IStore, ISearchTag } from './model';

// Action
export interface SetSearchBarTagsAction {
  type: ActionType.SetSearchBarTags;
  payload: {
    path: string;
    tags: ISearchTag[];
  };
}

// Action Creator
export const setSearchBarTags = (path: string, tags: ISearchTag[]): SetSearchBarTagsAction => ({
  type: ActionType.SetSearchBarTags,
  payload: { path, tags },
});

// User-Defined Type Guard
const isSetSearchBarTagsAction = (arg: any): arg is SetSearchBarTagsAction => {
  return arg !== null && typeof arg === 'object' && arg.type === ActionType.SetSearchBarTags;
}

// Reducer
export const reduceSetSearchBarTags = (state: IStore, action: IAction): IStore => {
  if (isSetSearchBarTagsAction(action)) {
    const tags = action.payload.tags;
    if (action.payload.path === '/home') {
      const searchBar = { ...state.homeTab.homePage.searchBar, tags };
      const homePage = { ...state.homeTab.homePage, searchBar }
      const homeTab = { ...state.homeTab, homePage };
      return { ...state, homeTab };
    } else if (action.payload.path === '/search') {
      const searchBar = { ...state.searchTab.searchPage.searchBar, tags };
      const searchPage = { ...state.searchTab.searchPage, searchBar }
      const searchTab = { ...state.searchTab, searchPage };
      return { ...state, searchTab };
    }
  }
  return state;
};
