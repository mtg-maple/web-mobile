import React, { FC, Dispatch, useState, useEffect } from 'react';

import SearchTemplate from '../templates/SearchTemplate';
import { ISearchPageStore, ISearchTag, ICard, Page } from '.././../models';
import { IAction, setSearchBarQuery, setSearchBarTags } from '../../store';
import {
  useScrollSaveOnUnmount,
  useScrollRestoreOnMount,
  useLocationSaveOnUnmount,
} from '../../hooks';
import {
  searchCard,
} from '../../services';

export type SearchPageProps = {
  store: ISearchPageStore,
  dispatch: Dispatch<IAction>,
}

const SearchPage: FC<SearchPageProps> = ({store, dispatch}) => {
  useScrollSaveOnUnmount(dispatch);
  useScrollRestoreOnMount(store, dispatch);
  useLocationSaveOnUnmount(dispatch);
  
  const [cards, setCards] = useState<ICard[]>([]);
  useEffect(() => {
    searchCard(store.searchBar.query)
      .then((res) => {
        if (res.status === 200) {
          setCards(res.result.data);
        }
      })
      .catch((err: any) => {
        console.error(err);
      });
  }, [store.searchBar.query]);

  const searchBar = {
    query: store.searchBar.query, 
    setQuery: (newQuery: string) => dispatch(setSearchBarQuery(Page.Search, newQuery)),
    tags: store.searchBar.tags,
    setTags: (newTags: ISearchTag[]) => dispatch(setSearchBarTags(Page.Search, newTags)),
    onClick: () => alert('clicked'),
  }

  const props = { searchBar, cards };
  return (
    <SearchTemplate { ...props } />
  )
};

export default SearchPage;