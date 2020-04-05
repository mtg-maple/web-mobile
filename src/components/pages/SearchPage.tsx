import React, { FC, Dispatch } from 'react';

import SearchTemplate from '../templates/SearchTemplate';
import { ISearchPageStore, ISearchTag } from '.././../models';
import { IAction, setSearchBarQuery, setSearchBarTags } from '../../store';
import {
  useScrollSaveOnUnmount,
  useScrollRestoreOnMount,
  useLocationSaveOnUnmount,
} from '../../hooks';

export type SearchPageProps = {
  store: ISearchPageStore,
  dispatch: Dispatch<IAction>,
}

const SearchPage: FC<SearchPageProps> = ({store, dispatch}) => {
  useScrollSaveOnUnmount(dispatch);
  useScrollRestoreOnMount(store, dispatch);
  useLocationSaveOnUnmount(dispatch);

  const searchBar = {
    query: store.searchBar.query, 
    setQuery: (newQuery: string) => dispatch(setSearchBarQuery('/search', newQuery)),
    tags: store.searchBar.tags,
    setTags: (newTags: ISearchTag[]) => dispatch(setSearchBarTags('/search', newTags)),
    onClick: () => alert('clicked'),
  }

  const props = { searchBar };
  return (
    <SearchTemplate { ...props } />
  )
};

export default SearchPage;