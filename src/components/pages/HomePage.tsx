import React, { FC, Dispatch, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import HomeTemplate from '../templates/HomeTemplate';
import { IAction, ISearchTag, IHomePageStore, setSearchBarQuery, setSearchBarTags, setDecks } from '../../store';
import { getDecks, IResponse, DecksPage } from '../../mock';
import useScrollSaveOnUnmount from '../../hooks/useScrollSaveOnUnmount';
import useScrollRestoreOnMount from '../../hooks/useScrollRestoreOnMount';

export type HomePageProps = {
  store: IHomePageStore,
  dispatch: Dispatch<IAction>;
}

const HomePage: FC<HomePageProps> = ({ store, dispatch }) => {
  const { path } = useRouteMatch();

  useScrollSaveOnUnmount(dispatch);
  useScrollRestoreOnMount(store, dispatch);

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