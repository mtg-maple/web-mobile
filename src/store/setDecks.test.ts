import { ManaColor } from '../models';
import { setDecks, isSetDecksAction, reduceSetDecks } from './setDecks';
import { ActionType, initialStore } from '../store';

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
  const action = setDecks('/home', decks);

  it('Action Creator', (): void => {
    expect(action).toMatchObject({
      type: ActionType.SetDecks,
      payload: {
        path: '/home',
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
    expect(newStore.homePage.decks).toMatchObject(decks);
  });

  it('Reducer: Invalid Use', (): void => {
    const newStore = reduceSetDecks(initialStore, { type: ActionType.SetScrollPosition });
    expect(newStore).toMatchObject(initialStore);
  });
});
