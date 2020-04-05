import React, { FC } from 'react';

import Label from '../../atoms/Label';
import NumberText from '../../atoms/NumberText';
import Description from '../../atoms/Description';
import CardListItemLayout from '../../molecules/CardListItemLayout';
import ManaCost from '../../molecules/ManaCost';
import { ICard, IDeckCard } from '../../../models';

import styles from './style.module.scss';

export type DeckListItemProps = {
  card: ICard | IDeckCard;
  onClick?: (e: React.MouseEvent) => void;
  showMoreIcon?: boolean;
  className?: string;
}

const CardListItem: FC<DeckListItemProps> = ({ card, onClick, showMoreIcon, className }) => {
  const cardImageProps = {
    src: card.thumbnailImageUrl,
    alt: `${card.name} thumbnail`,
    size: 'thumbnail' as 'thumbnail',
  };
  const info = (
    <>
      {
        'count' in card && typeof card.count === 'number' ?
          <div className={[styles.countName, styles.infoItem].join(' ')}>
            <NumberText num={card.count} size="large" />
            <Label weight='bold'>{card.name}</Label>
          </div>
          :
          <Label className={styles.infoItem} weight='bold'>{card.name}</Label>
      }
      <Description className={styles.infoItem} size='small' color='muteText'>{
        typeof card.power !== 'undefined' &&  typeof card.toughness !== 'undefined' ? 
          `${card.type}(${card.power}/${card.toughness})` : card.type 
      }</Description>
      {
        card.manaCost && 
          <ManaCost className={styles.infoItem} value={card.manaCost} size='small' />
      }
    </>
  );
  return (
    <CardListItemLayout {...{ cardImageProps, info, onClick, showMoreIcon, className }} />
  );
};

export default CardListItem;