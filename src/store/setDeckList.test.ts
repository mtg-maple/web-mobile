import { Page } from '../models';
import { setDeckList, isSetDeckListAction, reduceSetDeckList } from './setDeckList';
import { ActionType, initialStore } from '.';

describe('setDeckList', ():void => {
  const decks = [
    {
      id: 'deckid',
      name: 'deckname',
      description: 'deckdescription',
      thumbnailImageUrl: 'https://dummy',
      colors: ['W'],
    }
  ];
  const action = setDeckList(Page.Home, decks);

  it('Action Creator', (): void => {
    expect(action).toMatchObject({
      type: ActionType.SetDeckList,
      payload: {
        targetPage: Page.Home,
        decks,
      },
    });
  });

  it('Type Guard: Valid Use', (): void => {
    expect(isSetDeckListAction(action)).toBe(true);
  });

  it('Type Guard: Invalid Use', (): void => {
    expect(isSetDeckListAction({})).toBe(false);
  });

  it('Reducer: Valid Use', (): void => {
    const newStore = reduceSetDeckList(initialStore, action);
    expect(newStore.homePage.decks).toMatchObject(decks);
  });

  it('Reducer: Invalid Use', (): void => {
    const newStore = reduceSetDeckList(initialStore, { type: ActionType.SetScrollPosition });
    expect(newStore).toMatchObject(initialStore);
  });
});
