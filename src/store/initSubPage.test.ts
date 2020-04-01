import * as H from 'history';

import { initSubPage, isInitSubPageAction, reduceInitSubPage } from './initSubPage';
import { ActionType, Page, initialStore } from '../store';

describe('initSubPage', ():void => {
  const targetPage = Page.Deck;
  const fromLocation: H.Location<H.History.PoorMansUnknown> = {
    key: 'ac3df4',
    pathname: '/home',
    search: '?some=search-string',
    hash: '#howdy',
    state: null,
  };
  const action = initSubPage(targetPage, fromLocation);
  const store = {
    ...initialStore,
    deckPage: {
      ...initialStore.deckPage,
      scrollPositionY: 100,
    },
  };

  it('Action Creator', (): void => {
    expect(action).toMatchObject({
      type: ActionType.InitSubPage,
      payload: {
        targetPage,
        fromLocation,
      },
    });
  });

  it('Type Guard: Valid Use', (): void => {
    expect(isInitSubPageAction(action)).toBe(true);
  });

  it('Type Guard: Invalid Use', (): void => {
    expect(isInitSubPageAction({})).toBe(false);
  });

  it('Reducer: Valid Use', (): void => {
    const newStore = reduceInitSubPage(store, action);
    expect(newStore.deckPage.scrollPositionY).toBe(0);
    expect(newStore.deckPage.fromLocation).toMatchObject(fromLocation);
  });

  it('Reducer: Invalid Use', (): void => {
    const newStore = reduceInitSubPage(store, { type: ActionType.SetScrollPosition });
    expect(newStore).toMatchObject(store);
  });
});
