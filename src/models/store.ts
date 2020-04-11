import * as H from 'history';
import {
  IDeckListItem,
  IDeck,
  ICardImage,
  ICardText,
} from './objects';

export interface IStore {
  homePage: IHomePageStore;
  deckPage: IDeckPageStore;
  searchPage: ISearchPageStore;
  userPage: IUserPageStore;
  cardPage: ICardPageStore;
  lastLocation?: H.Location<H.History.PoorMansUnknown>;
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

export interface ICardPageStore extends IPageStore, ISubPageStore {
  title?: string;
  cardImages?: ICardImage[];
  cardText?: ICardText;
}

export interface ISearchBarState {
  query: string;
  tags: ISearchTag[];
}

export interface ISearchTag {
  label: string;
  value: string;
}