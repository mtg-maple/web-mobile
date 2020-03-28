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

const CardListItemLayout: FC<CardListItemLayoutProps> = ({ cardImageProps, info, onClick, showMoreIcon, className }) => {
  const listItemContent = (
    <div className={[styles.cardListItemContent, className].join(' ')}>
      <CardImage { ...{ ...cardImageProps, className: [cardImageProps.className, styles.cardImage].join(' ') } }/>
        <div className={styles.info}>
          { info }
        </div>
        {
          showMoreIcon &&
          <MoreIcon color="muteText" className={styles.moreIcon}/>
        }
    </div>
  );
  return (
    <li className={[styles.cardListItem, className].join(' ')}>
      {
        typeof onClick === 'undefined' ? listItemContent : <button className={styles.cardListItemLink} onClick={onClick}>{ listItemContent }</button>
      }
    </li> 
  );
};

export default CardListItemLayout;