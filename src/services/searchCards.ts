import { IServiceCommonResponse, IServiceCardSummary } from '../models';

export interface IServiceSearchCardsResponse extends IServiceCommonResponse {
  cards?: IServiceCardSummary[];
}

const searchCards = (query: string): Promise<IServiceSearchCardsResponse> => {
  return new Promise<IServiceSearchCardsResponse>((resolve, reject) => {
    const endpoint = process.env.REACT_APP_API_ENDPOINT;
    if (endpoint) {
      fetch(`${endpoint}/search.cards?name=${query}`)
        .then((res) => {
          if (res.status === 200) {
            res.json()
              .then((body: IServiceSearchCardsResponse) => resolve(body))
              .catch((err) => resolve({
                ok: false,
                error: 'json_parse_error',
                message: err,
              }));
          } else {
            resolve({
              ok: false,
              error: 'api_error',
              message: 'API Error',
            });
          }
        })
        .catch((err) => resolve({
          ok: false,
          error: 'network_error',
          message: err,
        }));
    } else {
      reject('REACT_APP_API_ENDPOINT not found');
    }
  });
};

export default searchCards;
