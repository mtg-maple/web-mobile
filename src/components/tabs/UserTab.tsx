import React, { FC, Dispatch } from 'react';
import { useRouteMatch } from 'react-router-dom';

import UserPage from '../pages/UserPage';
import { IUserTabStore, IAction } from '../../store';
import useTraceLocation from '../../hooks/useTraceLocation';
import useRestoreScroll from '../../hooks/useRestoreScroll';
import useScrollSaveOnUnmount from '../../hooks/useScrollSaveOnUnmount';

export type UserTabProps = {
  store: IUserTabStore,
  dispatch: Dispatch<IAction>,
}

const UserTab: FC<UserTabProps> = ({ store, dispatch }) => {
  const { path } = useRouteMatch();
  useTraceLocation(path, dispatch);
  useRestoreScroll(store.scrollPositionY);
  useScrollSaveOnUnmount(dispatch);
  return (
    <UserPage store={store.userPage} dispatch={dispatch} />
  );
};

export default UserTab;
