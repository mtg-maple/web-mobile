import * as H from 'history';

import { IStore } from '../models';
import { ActionType, IAction } from './actions';

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
    return { ...state, lastLocation };
  }
  return state;
};
