import { ActionType, IAction } from './actions';
import { IStore } from './model';
import * as H from 'history';

// Action
export interface SetLastLocationAction {
  type: ActionType.SetLastLocation;
  payload: {
    path: string;
    lastLocation: H.Location<H.History.PoorMansUnknown>;
  };
}

// Action Creator
export const setLastLocation = (path: string, lastLocation: H.Location<H.History.PoorMansUnknown>): SetLastLocationAction => ({
  type: ActionType.SetLastLocation,
  payload: { path, lastLocation },
});

// User-Defined Type Guard
export const isSetLastLocationAction = (arg: any): arg is SetLastLocationAction => {
  return arg !== null && typeof arg === 'object' && arg.type === ActionType.SetLastLocation;
}

// Reducer
export const reduceSetLastLocation = (state: IStore, action: IAction): IStore => {
  if (isSetLastLocationAction(action)) {
    const lastLocation = action.payload.lastLocation;
    const newState = { ...state, lastLocation };
    if (action.payload.path.startsWith('/home')) {
      const beforeLastLocation = state.homeTab.lastLocation;
      const homeTab = { ...state.homeTab, lastLocation, beforeLastLocation };
      return { ...newState, homeTab };
    } else if (action.payload.path.startsWith('/search')) {
      const beforeLastLocation = state.searchTab.lastLocation;
      const searchTab = { ...state.searchTab, lastLocation, beforeLastLocation };
      return { ...newState, searchTab };
    } else if (action.payload.path.startsWith('/user')) {
      const beforeLastLocation = state.userTab.lastLocation;
      const userTab = { ...state.userTab, lastLocation, beforeLastLocation };
      return { ...newState, userTab };
    }
    return newState;
  }
  return state;
};
