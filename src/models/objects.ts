import { IESLegalities } from './elasticsearch';

export interface IDeckListItem {
  id: string;
  name: string;
  description: string;
  thumbnailImageUrl: string;
  colors: string[];
}

export interface IDeck extends IDeckListItem {
  mainboard?: IDeckCard[];
  sideboard?: IDeckCard[];
}

export interface IDeckCard extends ICard {
  count: number;
}

export interface ICard {
  id: string;
  name: string;
  thumbnailImageUrl: string,
  type: string,
  types: string[],
  convertedManaCost: number;
  power?: string;
  toughness?: string;
  loyalty?: string;
  manaCost?: string,
  colors?: string[],
}


export type ICardImage = {
  url: string;
};

export type ICardText = {
  spells: ICardSpell[];
  meta: ICardMeta;
  legalities: IESLegalities;
};

export type ICardSpell = {
  name: string;
  manaCost: string;
  supertypes: string[];
  types: string[];
  subtypes: string[];
  power?: string;
  toughness?: string;
  loyalty?: string;
  text: string;
  side?: string;
};

export type ICardMeta = {
  rarity: string;
  artist: string;
  sets: string[];
};
