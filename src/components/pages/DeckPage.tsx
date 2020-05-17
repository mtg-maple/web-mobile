import React, { FC, Dispatch, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';

import { getDeck } from 'src/graphql/queries';
import DeckTemplate from '../templates/DeckTemplate';
import { IAction, setDeck } from '../../store';
import { IDeckPageStore, IResponse, Page, IDeck } from '../../models';
import {
  useScrollSaveOnUnmount,
  useScrollRestoreOnMount,
  useLocationSaveOnUnmount,
} from '../../hooks';
import { IDeckResult } from '../../services';

export type DeckPageProps = {
  store: IDeckPageStore,
  dispatch: Dispatch<IAction>,
}

const DeckPage: FC<DeckPageProps> = ({ store, dispatch }) => {
  let { username, deckId } = useParams();

  useScrollSaveOnUnmount(dispatch);
  useScrollRestoreOnMount(store, dispatch);
  useLocationSaveOnUnmount(dispatch);
  useEffect(() => {
    (async () => {
      const result = await API.graphql(graphqlOperation(getDeck, {
        username,
        deckId,
      }));
      console.log(result);
      if ('data' in result && result.data) {
        const getDeckResult = result.data as {
          getDeck: IDeck,
        };
        dispatch(setDeck(Page.Deck, getDeckResult.getDeck));
      }
    })().catch((err) => {
      console.error(err);
    });
  }, [dispatch, username, deckId]);
  /*
  useEffect(() => {
    getDeck('abc')
      .then((res: IResponse<IDeckResult>) => {
        if (res.status === 200) {
          dispatch(setDeck(Page.Deck, res.result.data));
        }
      })
      .catch((reason: any) => {
        console.log(reason);
      });
  }, [dispatch]);
  */
  const backButtonProps = {
    to: store.fromLocation || '/home',
    onClick: () => {
      // TODO:
      // Clean up
    },
  };

  return (
    <DeckTemplate deck={store.deck} backButtonProps={backButtonProps} />
  );
};

export default DeckPage;
