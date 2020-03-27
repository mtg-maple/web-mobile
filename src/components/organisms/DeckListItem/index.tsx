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
  title: string;
  description: string;
  colors: ManaColor[];
  onClick?: (e: React.MouseEvent) => void;
  showMoreIcon?: boolean;
}

const DeckListItem: FC<DeckListItemProps> = ({ thumbnailImageUrl, title, description, colors, onClick, showMoreIcon }) => {
  const cardImageProps = {
    src: thumbnailImageUrl,
    alt: `${title} thumbnail`,
    size: 'deckThumbnail' as 'deckThumbnail',
  };
  const info = (
    <>
      <Label className={styles.infoItem} text={title} weight='bold'/>
      {
        description &&
        <Description className={styles.infoItem} size='small' color='muteText'>{ description }</Description>
      }
      <ManaColors className={styles.infoItem} colors={colors} size='medium'/>
    </>
  );
  return (
    <CardListItemLayout { ...{ cardImageProps, info, onClick, showMoreIcon } }/>
  );
};

export default DeckListItem;