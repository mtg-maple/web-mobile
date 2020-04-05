export interface IDeckListItem {
  id: string;
  name: string;
  description: string;
  thumbnailImageUrl: string;
  colors: string[];
}

export interface IDeck extends IDeckListItem {
  mainboard: IDeckCard[];
  sideboard: IDeckCard[];
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
  power?: number;
  toughness?: number;
  manaCost?: string,
  colors?: string[],
}
