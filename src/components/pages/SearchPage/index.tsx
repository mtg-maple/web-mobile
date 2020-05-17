import React, { FC, Dispatch, useState, useEffect } from 'react';

import SearchTemplate from 'src/components/templates/SearchTemplate';
import { ISearchPageStore, ISearchTag, ICard, Page } from 'src/models';
import { IAction, setSearchBarQuery, setSearchBarTags } from 'src/store';
import {
  useScrollSaveOnUnmount,
  useScrollRestoreOnMount,
  useLocationSaveOnUnmount,
} from 'src/hooks';
import {
  searchCards,
} from 'src/services';

import { refineServiceCards } from './refine';

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
    if (store.searchBar.query !== '') {
      searchCards(store.searchBar.query)
      .then((res) => {
        if (res.ok && res.cards) {
          setCards(refineServiceCards(res.cards));
        } else {
          if (res.warning || res.error) {
            alert(JSON.stringify(res));
          }
        }
      })
      .catch((err: any) => {
        console.error(err);
      });
    }
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