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
  
}

export interface ISearchTabState extends ITabStore {
  
}

export interface IUserTabState extends ITabStore {

}

export const initialStore: IStore = {
  tabs: {
    home: {
      scrollPositionY: 0,
    },
    search: {
      scrollPositionY: 0,
    },
    user: {
      scrollPositionY: 0,
    }
  }
};