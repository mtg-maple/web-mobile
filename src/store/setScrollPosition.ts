import { ActionType, IAction } from './actions';
import { IStore } from './model';

// Action
export interface SetScrollPositionAction {
  type: ActionType.SetScrollPosition;
  payload: {
    path: string;
    scrollPositionY: number;
  };
}

// Action Creator
export const setScrollPosition = (path: string, scrollPositionY: number): SetScrollPositionAction => ({
  type: ActionType.SetScrollPosition,
  payload: { path, scrollPositionY },
});

// User-Defined Type Guard
const isSetScrollPositionAction = (arg: any): arg is SetScrollPositionAction => {
  return arg !== null && typeof arg === 'object' && arg.type === ActionType.SetScrollPosition;
}

// Reducer
export const reduceSetScrollPosition = (state: IStore, action: IAction): IStore => {
  if (isSetScrollPositionAction(action)) {
    const scrollPositionY = action.payload.scrollPositionY;
    if (action.payload.path.startsWith('/home')) {
      const homeTab = { ...state.homeTab, scrollPositionY };
      return { ...state, homeTab };
    } else if (action.payload.path.startsWith('/search')) {
      const searchTab = { ...state.searchTab, scrollPositionY };
      return { ...state, searchTab };
    } else if (action.payload.path.startsWith('/user')) {
      const userTab = { ...state.userTab, scrollPositionY };
      return { ...state, userTab };
    }
  }
  return state;
};
