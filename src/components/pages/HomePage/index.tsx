import React, { FC, Dispatch, useEffect } from 'react';

import HomeTemplate from '../../templates/HomeTemplate';
import { IAction, ISearchTag, IHomeTabStore, setSearchBarQuery, setSearchBarTags, setDecks } from '../../../store';
import { getDecks, IResponse, DecksPage } from '../../../mock';

export type HomePageProps = {
  store: IHomeTabStore,
  dispatch: Dispatch<IAction>;
}

const HomePage: FC<HomePageProps> = ({ store, dispatch }) => {
  useEffect(() => {
    getDecks('').then((res: IResponse<DecksPage>) => {
      if (res.status === 200) {
        dispatch(setDecks('home', res.result.data));
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
  const decks = store.myDecks;
  
  const props = { searchBar, decks };
  return (
    <HomeTemplate { ...props }/>
  );
};

export default HomePage;