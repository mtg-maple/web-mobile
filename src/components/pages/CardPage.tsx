import React, { FC, Dispatch, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CardTemplate from 'src/components/templates/CardTemplate';
import { IAction, loadCardPage, initCardPage } from 'src/store';
import { IResponse, ICardPageStore } from 'src/models';
import { getCard, ICardResult } from 'src/services';

export type CardPageProps = {
  store: ICardPageStore;
  dispatch: Dispatch<IAction>;
}

const CardPage: FC<CardPageProps> = ({ store, dispatch }) => {
  let { id } = useParams();
  useEffect(() => {
    if (id) {
      getCard(id)
        .then((res: IResponse<ICardResult>) => {
          if (res.status === 200) {
            dispatch(loadCardPage(res.result));
          }
        })
        .catch((reason: any) => {
          console.log(reason);
        });
    } else {
      // TODO: Error Handling
      console.log(`id not found`);
    }
    return () => {
      dispatch(initCardPage());
    }
  }, [dispatch, id]);
  return (
    <CardTemplate
      title={store.title}
      backButtonProps={{ to: store.fromLocation || '/home' }}
      cardImages={store.cardImages}
      cardText={store.cardText}
    />
  );
};

export default CardPage;
