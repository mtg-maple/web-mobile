import { ICardLegalities } from './objects';

export interface IResponse<T> {
  status: number;
  result: T;
}

export interface IServiceCommonResponse {
  ok: boolean;
  warning?: string;
  error?: string;
  message?: string;
}

export interface IServiceSpell {
  id: string;
  name: string;
  names?: string[];
  manaCost: string;
  supertypes: string[];
  types: string[];
  subtypes: string[];
  power?: string;
  toughness?: string;
  loyalty?: string;
  text: string;
  side?: string;
  previewImageUrl: string;
  artCropImageUrl: string;
}

export interface IServiceCardDetail extends IServiceSpell {
  otherFaces?: IServiceSpell[];
  layout: string;
  rarity: string;
  setCodes: string[];
  artist: string;
  legalities: ICardLegalities;
};

export interface IServiceCardSummary {
  id: string;
  name: string;
  names?: string[];
  manaCost: string;
  supertypes: string[];
  types: string[];
  subtypes: string[];
  power?: string;
  toughness?: string;
  loyalty?: string;
  previewImageUrl: string;
  artCropImageUrl: string;
  layout: string;
};
