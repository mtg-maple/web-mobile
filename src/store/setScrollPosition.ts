import { ActionType, IAction } from './actions';
import { IStore } from './model';

// Action
export interface SetScrollPositionAction {
  type: ActionType.SetScrollPosition;
  payload: {
    tab: 'home' | 'search' | 'user';
    scrollPositionY: number;
  };
}

// Action Creator
export const setScrollPosition = (tab: 'home' | 'search' | 'user', scrollPositionY: number): SetScrollPositionAction => ({
  type: ActionType.SetScrollPosition,
  payload: { tab, scrollPositionY },
});

// User-Defined Type Guard
const isSetScrollPositionAction = (arg: any): arg is SetScrollPositionAction => {
  return arg !== null && typeof arg === 'object' && arg.type === ActionType.SetScrollPosition;
}

// Reducer
export const reduceSetScrollPosition = (state: IStore, action: IAction): IStore => {
  if (isSetScrollPositionAction(action)) {
    const scrollPositionY = action.payload.scrollPositionY;
    switch(action.payload.tab) {
      case 'home':
        const home = { ...state.tabs.home, scrollPositionY };
        return { ...state, ...{ tabs: { ...state.tabs, home }} };
      case 'search':
        const search = { ...state.tabs.search, scrollPositionY };
        return { ...state, ...{ tabs: { ...state.tabs, search }} };
      case 'user':
        const user = { ...state.tabs.user, scrollPositionY };
        return { ...state, ...{ tabs: { ...state.tabs, user }} };
      default:
        return state;
    }
  } else {
    return state;
  }
};
