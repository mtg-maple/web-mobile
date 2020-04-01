import React, { FC, MouseEvent } from 'react';

import DeckListItem from '../DeckListItem';
import styles from './style.module.scss';
import { IDeckListItem } from '../../../store';

export type DeckListProps = {
  decks: IDeckListItem[];
  onClicks: ((e: MouseEvent) => void)[];
  className?: string;
};

const DeckList: FC<DeckListProps> = ({ decks, onClicks, className }) => {
  return (
    <ul className={[styles.deckList, className].join(' ')}>
      {
        decks.map((deck: IDeckListItem, i: number) => (
          <DeckListItem
            key={deck.id}
            id={deck.id}
            name={deck.name}
            description={deck.description}
            thumbnailImageUrl={deck.thumbnailImageUrl}
            colors={deck.colors}
            className={styles.deckListItem}
            onClick={onClicks[i]}
            showMoreIcon
          />
        ))
      }
    </ul>
  );
};

export default DeckList;