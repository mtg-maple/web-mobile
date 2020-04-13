import { IServiceCommonResponse, IServiceCardDetail } from 'src/models';

export interface IServiceCardInfoResponse extends IServiceCommonResponse {
  card?: IServiceCardDetail;
}

const getCard = async (cardId: string): Promise<IServiceCardInfoResponse>  => {
  return new Promise<IServiceCardInfoResponse>((resolve, reject) => {
    const endpoint = process.env.REACT_APP_API_ENDPOINT;
    if (endpoint) {
      fetch(`${endpoint}/card.info?id=${cardId}`)
        .then((res) => {
          if (res.status === 200) {
            res.json()
              .then((body: IServiceCardInfoResponse) => resolve(body))
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

export default getCard;