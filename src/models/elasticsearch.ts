export interface IESSearchResult<T> {
  took: number;
  time_out: boolean;
  _shards: {
    total: number;
    successful: number;
    skipped: number;
    failed: number;
  };
  hits: {
    total: {
      value: number;
      relation: string;
    };
    max_score: number;
    hits: IESRecord<T>[];
  }
}

export interface IESRecord<T> {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  _source: T;
}

export interface IESCard {
  meta: IESCardMeta;
  data: IESCardData;
}

export interface IESCardMeta {
  date: string;
  pricesDate: string;
  version: string;
}

export interface IESCardData {
  uuid: string;
  scryfallId: string;
  name: string;
  power: string;
  toughness: string;
  loyalty: string;
  type: string;
  types: string[];
  colors: string[];
  manaCost: string;
  convertedManaCost: number;
  legalities: IESLegalities;
}

export interface IESLegalities {
  brawl?: string;
  commander?: string;
  duel?: string;
  future?: string;
  frontier?: string;
  historic?: string;
  legacy?: string;
  modern?: string;
  pauper?: string;
  penny?: string;
  pioneer?: string;
  standard?: string;
  vintage?: string;
}