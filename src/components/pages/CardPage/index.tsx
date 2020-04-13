import React, { FC, Dispatch, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CardTemplate from 'src/components/templates/CardTemplate';
import { IAction, loadCardPage, initCardPage } from 'src/store';
import { ICardPageStore } from 'src/models';
import { getCard, IServiceCardInfoResponse } from 'src/services';

import { refineServiceCard } from './refine';

export type CardPageProps = {
  store: ICardPageStore;
  dispatch: Dispatch<IAction>;
}

const CardPage: FC<CardPageProps> = ({ store, dispatch }) => {
  let { id } = useParams();
  useEffect(() => {
    if (id) {
      getCard(id)
        .then((res: IServiceCardInfoResponse) => {
          if (res.ok && typeof res.card !== 'undefined') {
            dispatch(loadCardPage(refineServiceCard(res.card)));
          }
        })
        .catch((reason: any) => {
          console.error(reason);
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
