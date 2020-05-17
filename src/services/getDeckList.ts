import { 
  IDeckListItem,
  IResponse,
  IUserRecord,
  IDeckRecord,
} from '../models';

import DummyDB from './dummy.json';

export type IDeckListResult = {
  page: number;
  hasNextPage: boolean;
  data: IDeckListItem[];
};



const getDeckList = async (userId: string): Promise<IResponse<IDeckListResult>>  => {
  return new Promise<IResponse<IDeckListResult>>((resolve, reject) => {
    const users = DummyDB.users as IUserRecord[];
    const user = users.find((user: IUserRecord) => user.id === userId);
    if (typeof user === 'undefined') {
      reject(`user not found: ${userId}`);
    } else {
      const decks = DummyDB.decks as IDeckRecord[];
      const userDecks = user.decks
                          .map((deckId: string) => decks.find((deck: IDeckRecord) => deck.id === deckId))
                          .filter((deck: undefined | IDeckRecord) => typeof deck !== 'undefined');
      const assumeTypeSafe = (args: any): args is Array<IDeckRecord> => {
        return true;
      };
      if (assumeTypeSafe(userDecks)) {
        setTimeout(() => {
          resolve({
            status: 200,
            result: {
              page: 0,
              hasNextPage: true,
              data: userDecks.map((deck: IDeckRecord) => ({
                id: deck.id,
                name: deck.name,
                description: deck.description,
                thumbnailImageUrl: deck.thumbnailImageUrl,
                colors: deck.colors,
                ownerUsername: 'dummy',
              })),
            }
          });
        }, 500);
      } else {
        reject();
      }
    }
  });
};

export default getDeckList;
