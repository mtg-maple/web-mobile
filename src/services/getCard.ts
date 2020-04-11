import { IResponse, ICardImage, ICardText } from 'src/models';

export type ICardResult = {
  title: string;
  cardImages: ICardImage[];
  cardText: ICardText;
}

const dummy: ICardResult = {
  title: 'Oko, Thief of Crowns',
  cardImages: [{ url: 'https://img.scryfall.com/cards/large/front/3/4/3462a3d0-5552-49fa-9eb7-100960c55891.jpg' }],
  cardText: {
    spells: [
      {
        name: 'Oko, Thief of Crowns',
        manaCost: '{1}{G}{U}',
        supertypes: ['Legendary'],
        types: ['Planeswalker'],
        subtypes: ['Oko'],
        loyalty: '4',
        text: `[+2]: Create a Food token. (It's an artifact with "{2}, {T}, Sacrifice this artifact: You gain 3 life.")
[+1]: Target artifact or creature loses all abilities and becomes a green Elk creature with base power and toughness 3/3.
[−5]: Exchange control of target artifact or creature you control and target creature an opponent controls with power 3 or less.`,
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
  }
};


const getDeck = async (cardId: string): Promise<IResponse<ICardResult>>  => {
  return new Promise<IResponse<ICardResult>>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        status: 200,
        result: dummy,
      })
    }, 500);
  });
};

export default getDeck;