import React, { FC, Dispatch, useEffect, useContext } from 'react';
import { useRouteMatch } from 'react-router-dom';

import HomeTemplate from '../templates/HomeTemplate';
import { IAction, ISearchTag, IHomePageStore, setSearchBarQuery, setSearchBarTags, setDecks } from '../../store';
import { getDecks, IResponse, DecksPage } from '../../mock';
import useInitScroll from '../../hooks/useInitScroll';
import { AppLocationContext } from '../../context';

export type HomePageProps = {
  store: IHomePageStore,
  dispatch: Dispatch<IAction>;
}

const HomePage: FC<HomePageProps> = ({ store, dispatch }) => {
  const { path } = useRouteMatch();

  const { lastLocation } = useContext(AppLocationContext);
  useInitScroll(lastLocation);

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
  const decks = store.decks;
  
  const props = { searchBar, decks };
  return (
    <HomeTemplate { ...props }/>
  );
};

export default HomePage;