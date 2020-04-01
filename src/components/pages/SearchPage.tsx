import React, { FC, Dispatch } from 'react';

import SearchTemplate from '../templates/SearchTemplate';
import { ISearchPageStore, IAction } from '../../store';
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

  return (
    <SearchTemplate/>
  )
};

export default SearchPage;