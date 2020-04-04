import React, { FC } from 'react';

import CardListItemLayout from '../../molecules/CardListItemLayout';
import ManaColors, { ManaColor } from '../../molecules/ManaColors';
import Label from '../../atoms/Label';
import Description from '../../atoms/Description';
import styles from './style.module.scss';

export type DeckListItemProps = {
  thumbnailImageUrl: string;
  id: string;
  name: string;
  description: string;
  colors: ManaColor[];
  onClick?: (e: React.MouseEvent) => void;
  showMoreIcon?: boolean;
  className?: string;
}

const DeckListItem: FC<DeckListItemProps> = ({ thumbnailImageUrl, name, description, colors, onClick, showMoreIcon, className }) => {
  const cardImageProps = {
    src: thumbnailImageUrl,
    alt: `${name} thumbnail`,
    size: 'deckThumbnail' as 'deckThumbnail',
  };
  const info = (
    <>
      <Label className={styles.infoItem} weight='bold'>{name}</Label>
      {
        description &&
        <Description className={styles.infoItem} size='small' color='muteText'>{ description }</Description>
      }
      <ManaColors className={styles.infoItem} colors={colors} size='medium'/>
    </>
  );
  return (
    <CardListItemLayout { ...{ cardImageProps, info, onClick, showMoreIcon, className } }/>
  );
};

export default DeckListItem;