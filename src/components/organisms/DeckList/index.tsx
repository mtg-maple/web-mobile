import React, { FC } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import DeckListItem from '../DeckListItem';
import styles from './style.module.scss';
import { IDeckListItem } from '../../../store';

export type DeckListProps = {
  decks: IDeckListItem[];
  className?: string;
};

const DeckList: FC<DeckListProps> = ({ decks, className }) => {
  let history = useHistory();
  let { path } = useRouteMatch();
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
            onClick={() => history.push(`${path}/decks/${deck.id}`)}
            showMoreIcon
          />
        ))
      }
    </ul>
  );
};

export default DeckList;