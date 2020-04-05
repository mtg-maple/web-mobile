import { IStore, ISearchTag, Page } from '../models';
import { ActionType, IAction } from './actions';

// Action
export interface SetSearchBarTagsAction {
  type: ActionType.SetSearchBarTags;
  payload: {
    targetPage: Page;
    tags: ISearchTag[];
  };
}

// Action Creator
export const setSearchBarTags = (targetPage: Page, tags: ISearchTag[]): SetSearchBarTagsAction => ({
  type: ActionType.SetSearchBarTags,
  payload: { targetPage, tags },
});

// User-Defined Type Guard
const isSetSearchBarTagsAction = (arg: any): arg is SetSearchBarTagsAction => {
  return arg !== null && typeof arg === 'object' && arg.type === ActionType.SetSearchBarTags;
}

// Reducer
export const reduceSetSearchBarTags = (state: IStore, action: IAction): IStore => {
  if (isSetSearchBarTagsAction(action)) {
    const tags = action.payload.tags;
    if (action.payload.targetPage === Page.Home) {
      const searchBar = { ...state.homePage.searchBar, tags };
      const homePage = { ...state.homePage, searchBar }
      return { ...state, homePage };
    } else if (action.payload.targetPage === Page.Search) {
      const searchBar = { ...state.searchPage.searchBar, tags };
      const searchPage = { ...state.searchPage, searchBar };
      return { ...state, searchPage };
    }
  }
  return state;
};
