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

export type ManaColor = 'W' | 'B' | 'U' | 'R' | 'G'

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