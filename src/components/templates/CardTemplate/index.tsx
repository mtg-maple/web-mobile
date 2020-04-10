import React, { FC, MouseEvent } from 'react';
import * as H from 'history';

import CardImage from 'src/components/atoms/CardImage';
import InfoList, { InfoListDescriptionProps } from 'src/components/molecules/InfoList';
import NavigationHeader from 'src/components/organisms/NavigationHeader';

import styles from './style.module.scss';

export type CardTemplateProps = {
  backButtonProps: {
    to: H.LocationDescriptor<H.History.PoorMansUnknown> | ((location: H.Location<H.History.PoorMansUnknown>) => H.LocationDescriptor<H.History.PoorMansUnknown>);
    onClick?: (e: MouseEvent) => void;
  };
  cardImages: CardImageProps[];
  spells: SpellProps[];
  cardMeta: CardMetaProps;
  legality: string;
};

export type CardImageProps = {
  url: string;
};

export type SpellProps = {
  name: string;
  manaCost: string;
  types: string[];
  subtypes: string[];
  power: string;
  toughness: string;
  loyalty: string;
  text: string;
};

export type CardMetaProps = {
  rarity: string;
  artist: string;
  expansion: string;
};

const CardTemplate: FC<CardTemplateProps> = ({ backButtonProps, cardImages, spells, cardMeta, legality }) => {
  const cardName = spells.map((spell: SpellProps) => spell.name).join('//');
  return (
    <div className={styles.pageRoot}>
      {
        typeof undefined === 'undefined' ? //ToDo: ローディング中の条件分岐を書く
          'loading...' :
          <>
            <NavigationHeader
              className={styles.navigationHeader}
              title={cardName}
              backButtonProps={backButtonProps}
            />
            <section className={styles.cardImage}>
              {
                cardImages.map((cardImage: CardImageProps, i: number) => (                 
                  <CardImage key={cardImage.url} src={cardImage.url} alt={`${cardName} No.${i+1}`} />
                ))
              }
            </section>
            {
              spells.map((spell: SpellProps) => {
                let items: InfoListDescriptionProps = [
                  { label: 'Name', description: spell.name },
                  { label: 'Mana Cost', description: spell.manaCost },
                  { label: 'Type', description: spell.types.join(' ') },
                  { label: 'Sub Type', description: spell.subtypes.join(' ') },
                ];
                if (spell.loyalty) {
                  items.push({ label: 'Loyalty', description: spell.loyalty });
                }
                if (spell.power && spell.toughness) {
                  items.push({ label: 'Power/Toughness', description: `${spell.power}/${spell.toughness}` });
                }
                items.push({ label: 'Text', description: spell.text.split('\n') });
                return (
                  <InfoList items={items} />
                );
              })
            }
            <InfoList items={[
              { label: 'Expansion', description: cardMeta.expansion },
              { label: 'Rariy', description: cardMeta.rarity },
              { label: 'Artist', description: cardMeta.artist },
            ]} />
            <InfoList items={[ { label: 'Legality', description: legality } ]} />
          </>
      }
    </div>
  );
}

export default CardTemplate;
