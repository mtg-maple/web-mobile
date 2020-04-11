import { loadCardPage, isLoadCardPageAction, reduceLoadCardPage } from './loadCardPage';
import { ActionType, initialStore } from '.';

describe('loadCardPage', ():void => {
  const title = 'Oko, Thief of Crowns';
  const cardImages = [{ url:'https://img.scryfall.com/cards/large/front/3/4/3462a3d0-5552-49fa-9eb7-100960c55891.jpg' }];
  const cardText = {
    spells: [
      {
        name: 'Oko, Thief of Crowns',
        convertedManaCost: 3,
        manaCost: '{1}{G}{U}',
        supertypes: ['Legendary'],
        types: ['Planeswalker'],
        subtypes: ['Oko'],
        loyalty: '4',
        text: 'text',
      }
    ],
    meta: {
      set: ['ELD', 'PELD'],
      rarity: 'mythic',
      artist: 'Wesley Burt',
    },
    legalities: {
      brawl: 'Banned',
      commander: 'Legal',
      duel: 'Legal',
      future: 'Banned',
      historic: 'Banned',
      legacy: 'Legal',
      modern: 'Banned',
      penny: '',
      pioneer: 'Banned',
      standard: 'Banned',
      vintage: 'Legal',
    }
  };
  const action = loadCardPage({ title, cardImages, cardText });

  it('Action Creator', (): void => {
    expect(action).toMatchObject({
      type: ActionType.LoadCardPage,
      payload: { title, cardImages, cardText },
    });
  });

  it('Type Guard: Valid Use', (): void => {
    expect(isLoadCardPageAction(action)).toBe(true);
  });

  it('Type Guard: Invalid Use', (): void => {
    expect(isLoadCardPageAction({})).toBe(false);
  });

  it('Reducer: Valid Use', (): void => {
    const newStore = reduceLoadCardPage(initialStore, action);
    expect(newStore.cardPage).toMatchObject({ ...initialStore.cardPage, title, cardImages, cardText });
  });

  it('Reducer: Invalid Use', (): void => {
    const newStore = reduceLoadCardPage(initialStore, { type: ActionType.SetScrollPosition });
    expect(newStore).toMatchObject(initialStore);
  });
});
