import { setDecks, isSetDecksAction, reduceSetDecks } from './setDecks';
import { ManaColor, ActionType, initialStore } from '../store';

describe('setDecks', ():void => {
  const decks = [
    {
      id: 'deckid',
      name: 'deckname',
      description: 'deckdescription',
      thumbnailImageUrl: 'https://dummy',
      colors: ['W' as ManaColor],
    }
  ];
  const action = setDecks('home', decks);

  it('Action Creator', (): void => {
    expect(action).toMatchObject({
      type: ActionType.SetDecks,
      payload: {
        tab: 'home',
        decks,
      },
    });
  });

  it('Type Guard: Valid Use', (): void => {
    expect(isSetDecksAction(action)).toBe(true);
  });

  it('Type Guard: Invalid Use', (): void => {
    expect(isSetDecksAction({})).toBe(false);
  });

  it('Reducer: Valid Use', (): void => {
    const newStore = reduceSetDecks(initialStore, action);
    expect(newStore.tabs.home.myDecks).toMatchObject(decks);
  });

  it('Reducer: Invalid Use', (): void => {
    const newStore = reduceSetDecks(initialStore, { type: ActionType.SetScrollPosition });
    expect(newStore).toMatchObject(initialStore);
  });
});
