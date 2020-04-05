import React, { FC, Dispatch, useEffect } from 'react';

import DeckTemplate from '../templates/DeckTemplate';
import { IAction, setDeck } from '../../store';
import { IDeckPageStore, IResponse, Page } from '../../models';
import {
  useScrollSaveOnUnmount,
  useScrollRestoreOnMount,
  useLocationSaveOnUnmount,
} from '../../hooks';
import { getDeck, IDeckResult } from '../../services';

export type DeckPageProps = {
  store: IDeckPageStore,
  dispatch: Dispatch<IAction>,
}

const DeckPage: FC<DeckPageProps> = ({ store, dispatch }) => {
  useScrollSaveOnUnmount(dispatch);
  useScrollRestoreOnMount(store, dispatch);
  useLocationSaveOnUnmount(dispatch);
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
