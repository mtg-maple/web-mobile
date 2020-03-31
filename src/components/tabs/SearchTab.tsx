import React, { FC, Dispatch } from 'react';
import { useRouteMatch } from 'react-router-dom';
import useUpdateLocation from '../../hooks/useUpdateLocation';
import useRestoreScroll from '../../hooks/useRestoreScroll';

import SearchPage from '../pages/SearchPage';
import { ISearchTabStore, IAction } from '../../store';

export type SearchTabProps = {
  store: ISearchTabStore,
  dispatch: Dispatch<IAction>,
}

const SearchTab: FC<SearchTabProps> = ({ store, dispatch }) => {
  const { path } = useRouteMatch();
  useUpdateLocation(path, dispatch);
  useRestoreScroll(store.scrollPositionY);
  return (
    <SearchPage store={store.searchPage} dispatch={dispatch} />
  );
};

export default SearchTab;
