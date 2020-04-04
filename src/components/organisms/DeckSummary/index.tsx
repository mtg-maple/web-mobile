import React, { FC, MouseEvent } from 'react';

import Label from '../../atoms/Label';
import Description from '../../atoms/Description';
import { AddCardButton } from '../../molecules/ButtonInstance';
import { ManaColor } from '../../../store';
import styles from './style.module.scss';

export type DeckSummaryProps = {
  deck: {
    name: string;
    description: string;
    thumbnailImageUrl: string;
    colors: ManaColor[];
  };
  onAddCardClick?: (e: MouseEvent) => void;
}

const DeckSummary: FC<DeckSummaryProps> = ({ deck, onAddCardClick }) => {
  const colorBase = window.getComputedStyle(document.documentElement).getPropertyValue('--color-base') || '#000';
  return (
    <section
      className={styles.deckSummary}
      style={{
        background: `linear-gradient(to bottom, transparent, ${colorBase} 75%, ${colorBase}), url(${deck.thumbnailImageUrl})`,
        backgroundSize: 'cover',
      }}
    >
      <img 
        src={deck.thumbnailImageUrl}
        alt={`${deck.name} thumbnail`}
        className={styles.deckSummaryThumbnail}
      />
      <div className={styles.deckSummaryInfo}>
        <Label weight="bold">{deck.name}</Label>
        <Description className={styles.description} size="small" color="muteText">{deck.description}</Description>
        <AddCardButton
          className={styles.addCardButton}
          onClick={onAddCardClick}
          contextualClass="primary"/>
      </div>
    </section>
  );
};

export default DeckSummary;
