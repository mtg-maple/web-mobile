import React, { FC, Dispatch, useEffect, MouseEvent } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

import HomeTemplate from '../templates/HomeTemplate';
import { 
  IAction, 
  ISearchTag, 
  IHomePageStore, 
  IDeckListItem,
  setSearchBarQuery, 
  setSearchBarTags, 
  setDecks, 

} from '../../store';
import { getDecks, IResponse, DecksPage } from '../../mock';
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

  useScrollSaveOnUnmount(dispatch);
  useScrollRestoreOnMount(store, dispatch);
  useLocationSaveOnUnmount(dispatch);

  useEffect(() => {
    getDecks('').then((res: IResponse<DecksPage>) => {
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
        const toPath = `/home/decks/${deck.id}`;
        history.push(toPath);
      };
    }),
  };
  
  const props = { searchBar, deckList };
  return (
    <HomeTemplate { ...props }/>
  );
};

export default HomePage;
