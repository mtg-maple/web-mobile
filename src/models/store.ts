import * as H from 'history';
import {
  IDeckListItem,
  IDeck,
} from './objects';

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
  decks?: IDeckListItem[];
}

export interface IDeckPageStore extends IPageStore, ISubPageStore {
  deck?: IDeck;
}

export interface ISearchPageStore extends IPageStore {
  searchBar: ISearchBarState;
  decks?: IDeckListItem[];
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