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

export type ManaColor = 'W' | 'B' | 'U' | 'R' | 'G';
export type ManaCostSymbol = 
'W' | 'B' | 'U' | 'R' | 'G' | 
'W/U' | 'W/B' | 'U/B' | 'U/R' | 'B/R' | 'B/G' | 'R/W' | 'R/G' | 'G/W' | 'G/U' | 
'W/P' | 'B/P' | 'U/P' | 'R/P' | 'G/P' | 'P' |
'X' | 'Y' | 'Z' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' |
'11' | '12' | '13' | '14'  | '15'  | '16'  | '17'  | '18'  | '19'  | '20' | '1/2';
