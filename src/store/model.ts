export interface IStore {
  tabs: {
    home: IHomeTabStore,
    search: ISearchTabStore,
    user: IUserTabStore,
  };
}

export interface ITabStore {
  scrollPositionY: number;
}

export interface IHomeTabStore extends ITabStore {
  searchBar: ISearchBarState;
  myDecks: IDeckListItem[];
}

export interface ISearchTabStore extends ITabStore {
  searchBar: ISearchBarState;
  resultDecks: IDeckListItem[];
}

export interface IUserTabStore extends ITabStore {

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

export const initialStore: IStore = {
  tabs: {
    home: {
      scrollPositionY: 0,
      searchBar: {
        query: '',
        tags: [],
      },
      myDecks: [],
    },
    search: {
      scrollPositionY: 0,
      searchBar: {
        query: '',
        tags: [],
      },
      resultDecks: [],
    },
    user: {
      scrollPositionY: 0,
    }
  }
};