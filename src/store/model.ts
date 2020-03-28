export interface IStore {
  tabs: {
    home: IHomeTabState,
    search: ISearchTabState,
    user: IUserTabState,
  };
}

export interface ITabStore {
  scrollPositionY: number;
}

export interface IHomeTabState extends ITabStore {
  searchBar: ISearchBarState;
}

export interface ISearchTabState extends ITabStore {
  searchBar: ISearchBarState;
}

export interface IUserTabState extends ITabStore {

}

export interface ISearchBarState {
  query: string;
  tags: ISearchTag[];
}

export interface ISearchTag {
  label: string;
  value: string;
}

export const initialStore: IStore = {
  tabs: {
    home: {
      scrollPositionY: 0,
      searchBar: {
        query: '',
        tags: [],
      },
    },
    search: {
      scrollPositionY: 0,
      searchBar: {
        query: '',
        tags: [],
      },
    },
    user: {
      scrollPositionY: 0,
    }
  }
};