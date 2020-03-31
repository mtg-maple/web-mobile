import React, { FC, Dispatch, useContext } from 'react';

import DeckTemplate from '../templates/DeckTemplate';
import { IAction, ManaColor, IDeckCard, IDeckPageStore } from '../../store';
import useInitScroll from '../../hooks/useInitScroll';
import { AppLocationContext } from '../../context';

export type DeckPageProps = {
  store: IDeckPageStore;
  dispatch: Dispatch<IAction>,
  pathBackward: string,
}

const DeckPage: FC<DeckPageProps> = ({ store, dispatch, pathBackward }) => {
  const { lastLocation } = useContext(AppLocationContext);
  useInitScroll(lastLocation);

  const deck = {
    id: 'aaaa',
    name: '青白コントロール',
    description: '青と白のコントロールです',
    colors: ['W' as ManaColor, 'U' as ManaColor],
    thumbnailImageUrl: 'https://img.scryfall.com/cards/art_crop/front/c/2/c2089ec9-0665-448f-bfe9-d181de127814.jpg',
    mainboard: [] as IDeckCard[],
    sideboard: [] as IDeckCard[],
  };

  return (
    <DeckTemplate { ...{ deck, pathBackward } } />
  );
};

export default DeckPage;
