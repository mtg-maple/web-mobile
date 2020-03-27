import React, { FC } from 'react';
import { 
  CardListItemLayout,
  ManaColor,
  ManaColors,
  Label,
  Description,
} from '@mtg-maple/web-components';

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
      <Label className={styles.infoItem} text={name} weight='bold'/>
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