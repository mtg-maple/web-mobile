import React, { FC, Dispatch, useState, useEffect } from 'react';

import DeckTemplate from '../templates/DeckTemplate';
import { IAction } from '../../store';
import { IDeckPageStore, IDeck, IResponse } from '../../models';
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
  const [deck, setDeck] = useState<undefined | IDeck>(undefined);
  useEffect(() => {
    getDeck('abc')
      .then((res: IResponse<IDeckResult>) => {
        if (res.status === 200) {
          setDeck(res.result.data);
        }
      })
      .catch((reason: any) => {
        console.log(reason);
      });
  }, []);
  const backButtonProps = {
    to: store.fromLocation || '/home',
    onClick: () => {
      // TODO:
      // Clean up
    },
  };

  return (
    <DeckTemplate { ...{ deck, backButtonProps } } />
  );
};

export default DeckPage;
