import React, { FC } from 'react';

import { Deck } from '../../../mock';
import DeckListItem from '../DeckListItem';
import styles from './style.module.scss';

export type DeckListProps = {
  decks: Deck[];
  className?: string;
};

const DeckList: FC<DeckListProps> = ({ decks, className }) => {
  return (
    <ul className={[styles.deckList, className].join(' ')}>
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
            onClick={() => console.log('clicked')}
            showMoreIcon
          />
        ))
      }
    </ul>
  );
};

export default DeckList;