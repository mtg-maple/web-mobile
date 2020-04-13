import React, { FC, MouseEvent } from 'react';
import * as H from 'history';

import CardImage from 'src/components/atoms/CardImage';
import InfoList, { InfoListItem } from 'src/components/molecules/InfoList';
import NavigationHeader from 'src/components/organisms/NavigationHeader';
import { ICardImage, ICardText } from 'src/models';
import { getLegalitiesItems } from 'src/utils';

import styles from './style.module.scss';

export type CardTemplateProps = {
  title?: string;
  backButtonProps: {
    to: H.LocationDescriptor<H.History.PoorMansUnknown> | ((location: H.Location<H.History.PoorMansUnknown>) => H.LocationDescriptor<H.History.PoorMansUnknown>);
    onClick?: (e: MouseEvent) => void;
  };
  cardImages?: ICardImage[];
  cardText?: ICardText;
};

const CardTemplate: FC<CardTemplateProps> = ({ title, backButtonProps, cardImages, cardText }) => {
  const cardName = typeof cardText === 'undefined' ? title : cardText.spells.map((spell) => spell.name).join(' // ');
  return (
    <div className={styles.pageRoot}>
      <NavigationHeader
        className={styles.navigationHeader}
        title={cardName}
        backButtonProps={backButtonProps}
      />
      <section className={styles.cardImages}>
        {
          cardImages &&
          cardImages.map((cardImage: ICardImage, i: number) => (
            <CardImage key={cardImage.url} size="preview" src={cardImage.url} alt={`${title} No.${i + 1}`} />
          ))
        }
      </section>
      {
        typeof cardText === 'undefined' ?
          'loading...' :
          <section className={styles.cardText}>
            {
              cardText.spells.map((spell) => {
                let items: InfoListItem[] = [
                  { label: 'Name', description: spell.name },
                  { label: 'Type', description: [spell.supertypes, ...spell.types].join(' ') + (spell.subtypes.length > 0 ?  ` - ${spell.subtypes.join(' ')}` : '') },
                ];
                if (spell.manaCost) {
                  items.push({ label: 'Mana Cost', description: spell.manaCost });
                }
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
              { label: 'Card Set', description: cardText.meta.sets },
              { label: 'Rarity', description: cardText.meta.rarity },
              { label: 'Artist', description: cardText.meta.artist },
            ]} />
            <InfoList items={getLegalitiesItems(cardText.legalities)} />
          </section>
      }
    </div>
  );
}

export default CardTemplate;
