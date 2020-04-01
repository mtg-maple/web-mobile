import * as H from 'history';
import { ActionType, IAction } from './actions';
import { IStore } from './model';

// Action
export interface SetScrollPositionAction {
  type: ActionType.SetScrollPosition;
  payload: {
    location: H.Location<H.History.PoorMansUnknown>;
    scrollPositionY: number;
  };
}

// Action Creator
export const setScrollPosition = (location: H.Location<H.History.PoorMansUnknown>, scrollPositionY: number): SetScrollPositionAction => ({
  type: ActionType.SetScrollPosition,
  payload: { location, scrollPositionY },
});

// User-Defined Type Guard
const isSetScrollPositionAction = (arg: any): arg is SetScrollPositionAction => {
  return arg !== null && typeof arg === 'object' && arg.type === ActionType.SetScrollPosition;
}

// Reducer
export const reduceSetScrollPosition = (state: IStore, action: IAction): IStore => {
  if (isSetScrollPositionAction(action)) {
    const scrollPositionY = action.payload.scrollPositionY;
    const pathname = action.payload.location.pathname;
    if (pathname === '/home') {
      const homePage = { ...state.homeTab.homePage, scrollPositionY };
      const homeTab = { ...state.homeTab, homePage };
      return { ...state, homeTab };
    } else if (pathname.startsWith('/home/decks')) {
      const deckPage = { ...state.homeTab.deckPage, scrollPositionY };
      const homeTab = { ...state.homeTab, deckPage };
      return { ...state, homeTab };
    } else if (pathname === '/search') {
      const searchPage = { ...state.searchTab.searchPage, scrollPositionY }
      const searchTab = { ...state.searchTab, searchPage };
      return { ...state, searchTab };
    } else if (pathname === '/user') {
      const userPage = { ...state.userTab.userPage, scrollPositionY }
      const userTab = { ...state.userTab, userPage };
      return { ...state, userTab };
    }
  }
  return state;
};
