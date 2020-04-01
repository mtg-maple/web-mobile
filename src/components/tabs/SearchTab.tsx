import React, { FC, Dispatch } from 'react';

import SearchPage from '../pages/SearchPage';
import { ISearchTabStore, IAction } from '../../store';

export type SearchTabProps = {
  store: ISearchTabStore,
  dispatch: Dispatch<IAction>,
}

const SearchTab: FC<SearchTabProps> = ({ store, dispatch }) => {
  return (
    <SearchPage store={store.searchPage} dispatch={dispatch} />
  );
};

export default SearchTab;
