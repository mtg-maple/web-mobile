import { appendDecks, isAppendDecksAction, reduceAppendDecks } from './appendDecks';
import { ManaColor, ActionType, initialStore } from '../store';

describe('appendDecks', ():void => {
  const currentDecks = [
    {
      id: 'deckid1',
      name: 'deckname1',
      description: 'deckdescription1',
      thumbnailImageUrl: 'https://dummy1',
      colors: ['W' as ManaColor],
    }
  ];
  const newDecks = [
    {
      id: 'deckid2',
      name: 'deckname2',
      description: 'deckdescription2',
      thumbnailImageUrl: 'https://dummy2',
      colors: ['B' as ManaColor],
    }
  ];
  const action = appendDecks('/home', newDecks);
  const store = {
    ...initialStore,
    homeTab: {
        ...initialStore.homeTab,
        homePage: {
          ...initialStore.homeTab.homePage, 
          decks: currentDecks,
        }
    }
  };

  it('Action Creator', (): void => {
    expect(action).toMatchObject({
      type: ActionType.AppendDecks,
      payload: {
        path: '/home',
        decks: newDecks,
      },
    });
  });

  it('Type Guard: Valid Use', (): void => {
    expect(isAppendDecksAction(action)).toBe(true);
  });

  it('Type Guard: Invalid Use', (): void => {
    expect(isAppendDecksAction({})).toBe(false);
  });

  it('Reducer: Valid Use', (): void => {
    const newStore = reduceAppendDecks(store, action);
    expect(newStore.homeTab.homePage.decks).toMatchObject(currentDecks.concat(newDecks));
  });

  it('Reducer: Invalid Use', (): void => {
    const newStore = reduceAppendDecks(store, { type: ActionType.SetScrollPosition });
    expect(newStore).toMatchObject(store);
  });
});
