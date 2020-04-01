import * as H from 'history';

import { setLastLocation, isSetLastLocationAction, reduceSetLastLocation } from './setLastLocation';
import { ActionType, initialStore } from '../store';

describe('setLastLocation', ():void => {
  const lastLocation: H.Location<H.History.PoorMansUnknown> = {
    key: 'ac3df4',
    pathname: '/home/decks/a25u3925',
    search: '?some=search-string',
    hash: '#howdy',
    state: null,
  };
  const action = setLastLocation(lastLocation);

  it('Action Creator', (): void => {
    expect(action).toMatchObject({
      type: ActionType.SetLastLocation,
      payload: {
        location: lastLocation,
      },
    });
  });

  it('Type Guard: Valid Use', (): void => {
    expect(isSetLastLocationAction(action)).toBe(true);
  });

  it('Type Guard: Invalid Use', (): void => {
    expect(isSetLastLocationAction({})).toBe(false);
  });

  it('Reducer: Valid Use', (): void => {
    const newStore = reduceSetLastLocation(initialStore, action);
    expect(newStore.homeTab.lastLocation).toMatchObject(lastLocation);
    expect(newStore.lastLocation).toMatchObject(lastLocation);
  });

  it('Reducer: Invalid Use', (): void => {
    const newStore = reduceSetLastLocation(initialStore, { type: ActionType.SetScrollPosition });
    expect(newStore).toMatchObject(initialStore);
  });
});
