import React, { FC, Dispatch } from 'react';

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
  const deck = {
    id: 'aaaa',
    name: '青白コントロール',
    description: '青と白のコントロールです',
    colors: ['W' as ManaColor, 'U' as ManaColor],
    thumbnailImageUrl: 'https://img.scryfall.com/cards/art_crop/front/c/2/c2089ec9-0665-448f-bfe9-d181de127814.jpg',
    mainboard: [
      {
        id: '12234',
        name: '厚かましい借り手',
        description: 'クリーチャー - フェアリー・ならず者 (3/1)',
        cost: '{1}{U}{U}',
        count: 2,
        thumbnailImageUrl: 'https://img.scryfall.com/cards/art_crop/front/c/2/c2089ec9-0665-448f-bfe9-d181de127814.jpg',
      },
      {
        id: '12235',
        name: '厚かましい借り手',
        description: 'クリーチャー - フェアリー・ならず者 (3/1)',
        cost: '{1}{U}{U}',
        count: 2,
        thumbnailImageUrl: 'https://img.scryfall.com/cards/art_crop/front/c/2/c2089ec9-0665-448f-bfe9-d181de127814.jpg',
      },
      {
        id: '12236',
        name: '厚かましい借り手',
        description: 'クリーチャー - フェアリー・ならず者 (3/1)',
        cost: '{1}{U}{U}',
        count: 2,
        thumbnailImageUrl: 'https://img.scryfall.com/cards/art_crop/front/c/2/c2089ec9-0665-448f-bfe9-d181de127814.jpg',
      },
    ] as IDeckCard[],
    sideboard: [
      {
        id: '12234',
        name: '厚かましい借り手',
        description: 'クリーチャー - フェアリー・ならず者 (3/1)',
        cost: '{1}{U}{U}',
        count: 2,
        thumbnailImageUrl: 'https://img.scryfall.com/cards/art_crop/front/c/2/c2089ec9-0665-448f-bfe9-d181de127814.jpg',
      },
      {
        id: '12235',
        name: '厚かましい借り手',
        description: 'クリーチャー - フェアリー・ならず者 (3/1)',
        cost: '{1}{U}{U}',
        count: 2,
        thumbnailImageUrl: 'https://img.scryfall.com/cards/art_crop/front/c/2/c2089ec9-0665-448f-bfe9-d181de127814.jpg',
      },
      {
        id: '12236',
        name: '厚かましい借り手',
        description: 'クリーチャー - フェアリー・ならず者 (3/1)',
        cost: '{1}{U}{U}',
        count: 2,
        thumbnailImageUrl: 'https://img.scryfall.com/cards/art_crop/front/c/2/c2089ec9-0665-448f-bfe9-d181de127814.jpg',
      },
    ] as IDeckCard[],
  };
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
