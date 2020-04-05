import React, { FC, Dispatch, useEffect, MouseEvent } from 'react';
import { useRouteMatch, useHistory, useLocation } from 'react-router-dom';

import HomeTemplate from '../templates/HomeTemplate';
import { 
  IAction, 
  setSearchBarQuery, 
  setSearchBarTags, 
  setDeck,
  setDecks,
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
  const { path } = useRouteMatch();
  let history = useHistory();
  const currentLocation = useLocation();

  useScrollSaveOnUnmount(dispatch);
  useScrollRestoreOnMount(store, dispatch);
  useLocationSaveOnUnmount(dispatch);

  useEffect(() => {
    getDeckList('12345').then((res: IResponse<IDeckListResult>) => {
      if (res.status === 200) {
        dispatch(setDecks(path, res.result.data));
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchBar = {
    query: store.searchBar.query, 
    setQuery: (newQuery: string) => dispatch(setSearchBarQuery('home', newQuery)),
    tags: store.searchBar.tags,
    setTags: (newTags: ISearchTag[]) => dispatch(setSearchBarTags('home', newTags)),
    onClick: () => alert('clicked'),
  }
  const deckList = {
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
