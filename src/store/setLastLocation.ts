import { ActionType, IAction } from './actions';
import { IStore } from './model';
import * as H from 'history';

// Action
export interface SetLastLocationAction {
  type: ActionType.SetLastLocation;
  payload: {
    location: H.Location<H.History.PoorMansUnknown>;
  };
}

// Action Creator
export const setLastLocation = (location: H.Location<H.History.PoorMansUnknown>): SetLastLocationAction => ({
  type: ActionType.SetLastLocation,
  payload: { location },
});

// User-Defined Type Guard
export const isSetLastLocationAction = (arg: any): arg is SetLastLocationAction => {
  return arg !== null && typeof arg === 'object' && arg.type === ActionType.SetLastLocation;
}

// Reducer
export const reduceSetLastLocation = (state: IStore, action: IAction): IStore => {
  if (isSetLastLocationAction(action)) {
    const lastLocation = action.payload.location;
    const newState = { ...state, lastLocation };
    if (lastLocation.pathname.startsWith('/home')) {
      const homeTab = { ...state.homeTab, lastLocation };
      return { ...newState, homeTab };
    } else if (lastLocation.pathname.startsWith('/search')) {
      const searchTab = { ...state.searchTab, lastLocation };
      return { ...newState, searchTab };
    } else if (lastLocation.pathname.startsWith('/user')) {
      const userTab = { ...state.userTab, lastLocation };
      return { ...newState, userTab };
    }
    return newState;
  }
  return state;
};
