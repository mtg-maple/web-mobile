import { IDeckListItem } from '../models';
import { IResponse } from './response';

import dummyDecksResponse from './dummyDecksResponse.json';

export type DecksPage = {
  page: number;
  hasNextPage: boolean;
  data: IDeckListItem[];
};

const getDecks = async (id: string): Promise<IResponse<DecksPage>>  => {
  const decksResponse = {
    ...dummyDecksResponse,
    result: {
      ...dummyDecksResponse.result,
      data: dummyDecksResponse.result.data.map((deck) => ({
        ...deck,
        colors: deck.colors,
      })),
    },
  };
  return new Promise<IResponse<DecksPage>>((resolve, reject) => resolve(decksResponse));
};

export default getDecks;