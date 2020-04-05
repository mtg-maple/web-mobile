import React, { FC, MouseEvent } from 'react';

import CardListItem from '../CardListItem';
import styles from './style.module.scss';
import { ICard } from '../../../store';

export type DeckListProps = {
  cards: ICard[];
  onClicks: ((e: MouseEvent) => void)[];
  className?: string;
};

const DeckList: FC<DeckListProps> = ({ cards, onClicks, className }) => {
  return (
    <ul className={[styles.cardList, className].join(' ')}>
      {
        cards.map((card: ICard, i: number) => (
          <CardListItem
            key={card.id}
            card={card}
            className={styles.cardListItem}
            onClick={onClicks[i]}
            showMoreIcon
          />
        ))
      }
    </ul>
  );
};

export default DeckList;