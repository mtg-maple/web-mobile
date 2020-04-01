import * as H from 'history';

export interface IStore {
  homePage: IHomePageStore;
  deckPage: IDeckPageStore;
  searchPage: ISearchPageStore;
  userPage: IUserPageStore;
  lastLocation?: H.Location<H.History.PoorMansUnknown>;
}

export enum Page {
  Home = 'HOME',
  Search = 'SEARCH',
  User = 'USER',
  Deck = 'DECK',
}

export interface IPageStore {
  scrollPositionY: number;
}
export interface ISubPageStore {
  fromLocation?: H.Location<H.History.PoorMansUnknown>;
}

export interface IHomePageStore extends IPageStore {
  searchBar: ISearchBarState;
  decks: IDeckListItem[];
}

export interface IDeckPageStore extends IPageStore, ISubPageStore {
  deck?: IDeck;
}

export interface ISearchPageStore extends IPageStore {
  searchBar: ISearchBarState;
  decks: IDeckListItem[];
}

export interface IUserPageStore extends IPageStore {

}

export interface ISearchBarState {
  query: string;
  tags: ISearchTag[];
}

export interface ISearchTag {
  label: string;
  value: string;
}

export interface IDeckListItem {
  id: string;
  name: string;
  description: string;
  thumbnailImageUrl: string;
  colors: ManaColor[];
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
  cost: ManaCostSymbol[],
  thumbnailImageUrl: string,
}

export type ManaColor = 'W' | 'B' | 'U' | 'R' | 'G';
export type ManaCostSymbol = 
'W' | 'B' | 'U' | 'R' | 'G' | 
'W/U' | 'W/B' | 'U/B' | 'U/R' | 'B/R' | 'B/G' | 'R/W' | 'R/G' | 'G/W' | 'G/U' | 
'W/P' | 'B/P' | 'U/P' | 'R/P' | 'G/P' | 'P' |
'X' | 'Y' | 'Z' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' |
'11' | '12' | '13' | '14'  | '15'  | '16'  | '17'  | '18'  | '19'  | '20' | '1/2';
export type ILocation = {
  key: string,
  pathname: string,
  search: string,
  hash: string,
  state: null,
}

export const initialStore: IStore = {
  homePage: {
    scrollPositionY: 0,
    searchBar: {
      query: '',
      tags: [],
    },
    decks: [],
  },
  deckPage: {
    scrollPositionY: 0,
    fromLocation: undefined,
    deck: undefined,
  },
  searchPage: {
    scrollPositionY: 0,
    searchBar: {
      query: '',
      tags: [],
    },
    decks: [],
  },
  userPage: {
    scrollPositionY: 0,
  },
  lastLocation: undefined,
};