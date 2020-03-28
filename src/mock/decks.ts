import { ManaColor } from '../components/molecules/ManaColors';

import { IResponse } from './response';

export type DecksPage = {
  page: number;
  hasNextPage: boolean;
  data: Deck[];
};

export type Deck = {
  id: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  colors: ManaColor[];
}

const getDecks= async (id: string): Promise<IResponse<DecksPage>>  => {
  return new Promise<IResponse<DecksPage>>((resolve, reject) => {
    resolve({
      status: 200,
      result: {
        page: 1,
        hasNextPage: true,
        data: [
          {
            id: 'aaaa',
            name: '青白コントロール',
            description: '青と白のコントロールです',
            thumbnailUrl: 'https://img.scryfall.com/cards/art_crop/front/c/2/c2089ec9-0665-448f-bfe9-d181de127814.jpg',
            colors: ['W', 'U']
          },
          {
            id: 'aaab',
            name: '青白コントロール',
            description: '青と白のコントロールです',
            thumbnailUrl: 'https://img.scryfall.com/cards/art_crop/front/c/2/c2089ec9-0665-448f-bfe9-d181de127814.jpg',
            colors: ['W', 'U']
          },
          {
            id: 'aaac',
            name: '青白コントロール',
            description: '青と白のコントロールです',
            thumbnailUrl: 'https://img.scryfall.com/cards/art_crop/front/c/2/c2089ec9-0665-448f-bfe9-d181de127814.jpg',
            colors: ['W', 'U']
          },
          {
            id: 'aaad',
            name: '青白コントロール',
            description: '青と白のコントロールです',
            thumbnailUrl: 'https://img.scryfall.com/cards/art_crop/front/c/2/c2089ec9-0665-448f-bfe9-d181de127814.jpg',
            colors: ['W', 'U']
          },
          {
            id: 'aaae',
            name: '青白コントロール',
            description: '青と白のコントロールです',
            thumbnailUrl: 'https://img.scryfall.com/cards/art_crop/front/c/2/c2089ec9-0665-448f-bfe9-d181de127814.jpg',
            colors: ['W', 'U']
          },
          {
            id: 'aaaf',
            name: '青白コントロール',
            description: '青と白のコントロールです',
            thumbnailUrl: 'https://img.scryfall.com/cards/art_crop/front/c/2/c2089ec9-0665-448f-bfe9-d181de127814.jpg',
            colors: ['W', 'U']
          },
          {
            id: 'aaag',
            name: '青白コントロール',
            description: '青と白のコントロールです',
            thumbnailUrl: 'https://img.scryfall.com/cards/art_crop/front/c/2/c2089ec9-0665-448f-bfe9-d181de127814.jpg',
            colors: ['W', 'U']
          },
          {
            id: 'aaah',
            name: '青白コントロール',
            description: '青と白のコントロールです',
            thumbnailUrl: 'https://img.scryfall.com/cards/art_crop/front/c/2/c2089ec9-0665-448f-bfe9-d181de127814.jpg',
            colors: ['W', 'U']
          },
          {
            id: 'aaai',
            name: '青白コントロール',
            description: '青と白のコントロールです',
            thumbnailUrl: 'https://img.scryfall.com/cards/art_crop/front/c/2/c2089ec9-0665-448f-bfe9-d181de127814.jpg',
            colors: ['W', 'U']
          },
        ]
      }
    });
  });
};

export default getDecks;