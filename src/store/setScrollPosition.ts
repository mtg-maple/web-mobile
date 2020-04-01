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
      const homePage = { ...state.homePage, scrollPositionY };
      return { ...state, homePage };
    } else if (pathname === '/search') {
      const searchPage = { ...state.searchPage, scrollPositionY }
      return { ...state, searchPage };
    } else if (pathname === '/user') {
      const userPage = { ...state.userPage, scrollPositionY }
      return { ...state, userPage };
    } else if (pathname.startsWith('/decks')) {
      const deckPage = { ...state.deckPage, scrollPositionY };
      return { ...state, deckPage };
    }
  }
  return state;
};
