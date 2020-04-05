import { Page } from '../models';
import { setDeck, isSetDeckAction, reduceSetDeck } from './setDeck';
import { ActionType, initialStore } from '../store';

describe('setDeck', ():void => {
  const deck = {
    id: 'deckid',
    name: 'deckname',
    description: 'deckdescription',
    thumbnailImageUrl: 'https://dummy',
    colors: ['W'],
  };
  const action = setDeck(Page.Deck, deck);

  it('Action Creator', (): void => {
    expect(action).toMatchObject({
      type: ActionType.SetDeck,
      payload: {
        targetPage: Page.Deck,
        deck,
      },
    });
  });

  it('Type Guard: Valid Use', (): void => {
    expect(isSetDeckAction(action)).toBe(true);
  });

  it('Type Guard: Invalid Use', (): void => {
    expect(isSetDeckAction({})).toBe(false);
  });

  it('Reducer: Valid Use', (): void => {
    const newStore = reduceSetDeck(initialStore, action);
    expect(newStore.deckPage.deck.id).toBe(deck.id);
  });

  it('Reducer: Invalid Use', (): void => {
    const newStore = reduceSetDeck(initialStore, { type: ActionType.SetScrollPosition });
    expect(newStore).toMatchObject(initialStore);
  });
});
