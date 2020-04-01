import React, { FC, Dispatch } from 'react';
import { useRouteMatch } from 'react-router-dom';
import useTraceLocation from '../../hooks/useTraceLocation';

import SearchPage from '../pages/SearchPage';
import { ISearchTabStore, IAction } from '../../store';

export type SearchTabProps = {
  store: ISearchTabStore,
  dispatch: Dispatch<IAction>,
}

const SearchTab: FC<SearchTabProps> = ({ store, dispatch }) => {
  const { path } = useRouteMatch();
  useTraceLocation(path, dispatch);
  return (
    <SearchPage store={store.searchPage} dispatch={dispatch} />
  );
};

export default SearchTab;
