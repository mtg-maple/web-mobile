import React, { FC, Dispatch } from 'react';

import SearchTemplate from '../templates/SearchTemplate';
import { ISearchPageStore, IAction } from '../../store';
import useScrollSaveOnUnmount from '../../hooks/useScrollSaveOnUnmount';
import useScrollRestoreOnMount from '../../hooks/useScrollRestoreOnMount';

export type SearchPageProps = {
  store: ISearchPageStore,
  dispatch: Dispatch<IAction>,
}

const SearchPage: FC<SearchPageProps> = ({store, dispatch}) => {
  useScrollSaveOnUnmount(dispatch);
  useScrollRestoreOnMount(store, dispatch);

  return (
    <SearchTemplate/>
  )
};

export default SearchPage;