import { IServiceCardSummary, ICard } from 'src/models';
import { stringifyCardTypes } from 'src/utils';

export const refineServiceCards = (cards: IServiceCardSummary[]): ICard[] => {
  return cards.map((card) => ({
    id: card.id,
    name: card.names && card.names.length > 1 ? card.names.join(' // ') : card.name,
    thumbnailImageUrl: card.artCropImageUrl,
    type: stringifyCardTypes(card.supertypes, card.types, card.subtypes),
    types: card.types,
    convertedManaCost: 0,
    power: card.power,
    toughness: card.toughness,
    loyalty: card.loyalty,
    manaCost: card.manaCost,
  }));
}