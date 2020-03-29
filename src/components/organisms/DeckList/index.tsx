import React, { FC } from 'react';

import DeckListItem from '../DeckListItem';
import styles from './style.module.scss';
import { IDeckListItem } from '../../../store';

export type DeckListProps = {
  decks: IDeckListItem[];
  className?: string;
};

const DeckList: FC<DeckListProps> = ({ decks, className }) => {
  return (
    <ul className={[styles.deckList, className].join(' ')}>
      {
        decks.map((deck: IDeckListItem) => (
          <DeckListItem
            key={deck.id}
            id={deck.id}
            name={deck.name}
            description={deck.description}
            thumbnailImageUrl={deck.thumbnailImageUrl}
            colors={deck.colors}
            className={styles.deckListItem}
            onClick={() => console.log('clicked')}
            showMoreIcon
          />
        ))
      }
    </ul>
  );
};

export default DeckList;