

export interface IUserRecord {
  id: string;
  profile: {
    name: string;
  };
  decks: string[];
}

export interface IDeckRecord {
  id: string;
  name: string;
  description: string;
  thumbnailImageUrl: string;
  colors: string[];
  mainboard: {count: number; cardId: string }[];
  sideboard: {count: number; cardId: string }[];
}

export interface ICardRecord {
  id: string;
  scryfallId: string;
  types: string;
  name: string;
  type: string;
  colors?: string;
  manaCost?: string;
  convertedManaCost: 0;
  power?: number;
  toughness?: number;
}
