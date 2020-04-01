import React, { FC, Dispatch } from 'react';
import { useHistory } from 'react-router-dom';

import DeckTemplate from '../templates/DeckTemplate';
import { IAction, ManaColor, IDeckCard, IDeckPageStore } from '../../store';
import {
  useScrollSaveOnUnmount,
  useScrollRestoreOnMount,
  useLocationSaveOnUnmount,
} from '../../hooks';

export type DeckPageProps = {
  store: IDeckPageStore,
  dispatch: Dispatch<IAction>,
}

const DeckPage: FC<DeckPageProps> = ({ store, dispatch }) => {
  useScrollSaveOnUnmount(dispatch);
  useScrollRestoreOnMount(store, dispatch);
  useLocationSaveOnUnmount(dispatch);
  let history = useHistory();
  const deck = {
    id: 'aaaa',
    name: '青白コントロール',
    description: '青と白のコントロールです',
    colors: ['W' as ManaColor, 'U' as ManaColor],
    thumbnailImageUrl: 'https://img.scryfall.com/cards/art_crop/front/c/2/c2089ec9-0665-448f-bfe9-d181de127814.jpg',
    mainboard: [] as IDeckCard[],
    sideboard: [] as IDeckCard[],
  };
  const onBackButtonClick = () => {
    history.push(`${store.backLocation?.pathname}?action=back` || '/home' );
  };

  return (
    <DeckTemplate { ...{ deck, onBackButtonClick } } />
  );
};

export default DeckPage;
