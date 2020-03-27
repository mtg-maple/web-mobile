import React, { FC } from 'react';

import { Deck } from '../../../mockAPI';
import DeckListItem from '../DeckListItem';
import styles from './style.module.scss';

export type DeckListProps = {
  decks: Deck[];
};

const DeckList: FC<DeckListProps> = ({ decks }) => {
  return (
    <ul className={styles.deckList}>
      {
        decks.map((deck: Deck) => (
          <DeckListItem
            key={deck.id}
            id={deck.id}
            name={deck.name}
            description={deck.description}
            thumbnailImageUrl={deck.thumbnailUrl}
            colors={deck.colors}
            className={styles.deckListItem}
          />
        ))
      }
    </ul>
  );
};

export default DeckList;