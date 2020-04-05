import React, { FC, Dispatch, useEffect, MouseEvent } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import HomeTemplate from '../templates/HomeTemplate';
import { 
  IAction, 
  setSearchBarQuery, 
  setSearchBarTags, 
  setDeck,
  setDeckList,
  initSubPage,
} from '../../store';
import {
  IResponse,
  ISearchTag, 
  IHomePageStore, 
  IDeckListItem,
  Page, 
} from '../../models';
import { getDeckList, IDeckListResult } from '../../services';
import {
  useScrollSaveOnUnmount,
  useScrollRestoreOnMount,
  useLocationSaveOnUnmount,
} from '../../hooks';

export type HomePageProps = {
  store: IHomePageStore,
  dispatch: Dispatch<IAction>;
}

const HomePage: FC<HomePageProps> = ({ store, dispatch }) => {
  let history = useHistory();
  const currentLocation = useLocation();

  useScrollSaveOnUnmount(dispatch);
  useScrollRestoreOnMount(store, dispatch);
  useLocationSaveOnUnmount(dispatch);

  useEffect(() => {
    getDeckList('12345').then((res: IResponse<IDeckListResult>) => {
      if (res.status === 200) {
        dispatch(setDeckList(Page.Home, res.result.data));
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchBar = {
    query: store.searchBar.query, 
    setQuery: (newQuery: string) => dispatch(setSearchBarQuery(Page.Home, newQuery)),
    tags: store.searchBar.tags,
    setTags: (newTags: ISearchTag[]) => dispatch(setSearchBarTags(Page.Home, newTags)),
    onClick: () => alert('clicked'),
  }
  const deckList = store.decks && {
    decks: store.decks,
    onClicks: store.decks.map((deck: IDeckListItem): (e: MouseEvent) => void => {
      return (e: MouseEvent) => {
        dispatch(initSubPage(Page.Deck, currentLocation));
        dispatch(setDeck(Page.Deck, { ...deck, mainboard: undefined, sideboard: undefined }));
        history.push(`/decks/${deck.id}`);
      };
    }),
  };
  
  const props = { searchBar, deckList };
  return (
    <HomeTemplate { ...props }/>
  );
};

export default HomePage;
