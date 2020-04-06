import { IResponse, IESSearchResult, IESRecord, IESCard, ICard } from '../models';

import { createThumbnailImageUrl } from './utils';

export type ISearchCardResult = {
  page: number;
  hasNextPage: boolean;
  data: ICard[];
};

const searchCard = (query: string): Promise<IResponse<ISearchCardResult>> => {
  return new Promise<IResponse<ISearchCardResult>>((resolve, reject) => {
    const endpoint = process.env.REACT_APP_ES_ENDPOINT;
    if (typeof endpoint === 'undefined') {
      reject(new Error('set elsaticsearch endpoint'));
      return;
    }
    fetch(
      `${endpoint}/cards_dev/_search`,
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          size: 25,
          query: {
            match: {
              'data.name': query,
            },
          },
        }),
      }
    )
    .then((res: any) => {
      res.json()
        .then((result: IESSearchResult<IESCard>) => {
          const cards: ICard[] = result.hits.hits.map((hit: IESRecord<IESCard>) => ({
            id: hit._id,
            name: hit._source.data.name,
            thumbnailImageUrl: createThumbnailImageUrl(hit._source.data.scryfallId),
            type: hit._source.data.type,
            types: hit._source.data.types,
            convertedManaCost: hit._source.data.convertedManaCost,
            manaCost: hit._source.data.manaCost,
            colors: hit._source.data.colors,
            power: hit._source.data.power,
            toughness: hit._source.data.toughness,
            loyalty: hit._source.data.loyalty,
          }));
          resolve({
            status: 200,
            result: {
              page: 1,
              hasNextPage: false,
              data: cards,
            },
          });
        })
        .catch((err: any) => reject(err));
    })
    .catch((err: any) => reject(err));
  });
};

export default searchCard;
