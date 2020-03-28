import React, { FC, ReactElement } from 'react';

import CardImage, { CardImageProps } from '../../atoms/CardImage';
import { MoreIcon } from '../../atoms/FAIcon';
import styles from './style.module.scss';

export type CardListItemLayoutProps = {
  cardImageProps: CardImageProps;
  info: ReactElement;
  onClick?: (e: React.MouseEvent) => void;
  showMoreIcon?: boolean;
  className?: string;
};

const CardListItemLayout: FC<CardListItemLayoutProps> = ({ cardImageProps, info, onClick, showMoreIcon, className }) => (
  <li className={[styles.cardListItem, className].join(' ')}>
    <button className={[styles.cardListItemButton, className].join(' ')} onClick={onClick}>
      <CardImage { ...{ ...cardImageProps, className: [cardImageProps.className, styles.cardImage].join(' ') } }/>
        <div className={styles.info}>
          { info }
        </div>
        {
          showMoreIcon &&
          <MoreIcon color="muteText" className={styles.moreIcon}/>
        }
    </button>
  </li> 
);

export default CardListItemLayout;