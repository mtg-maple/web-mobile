import React, { FC, Dispatch, useContext } from 'react';

import SearchTemplate from '../templates/SearchTemplate';
import { ISearchPageStore, IAction } from '../../store';
import useInitScroll from '../../hooks/useInitScroll';
import { AppLocationContext } from '../../context';

export type SearchPageProps = {
  store: ISearchPageStore,
  dispatch: Dispatch<IAction>,
}

const SearchPage: FC<SearchPageProps> = ({store, dispatch}) => {
  const { lastLocation } = useContext(AppLocationContext);
  useInitScroll(lastLocation);

  return (
    <SearchTemplate/>
  )
};

export default SearchPage;