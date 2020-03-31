import React, { FC, Dispatch } from 'react';
import { useRouteMatch } from 'react-router-dom';

import UserPage from '../pages/UserPage';
import { IUserTabStore, IAction } from '../../store';
import useTraceLocation from '../../hooks/useTraceLocation';
import useRestoreScroll from '../../hooks/useRestoreScroll';

export type UserTabProps = {
  store: IUserTabStore,
  dispatch: Dispatch<IAction>,
}

const UserTab: FC<UserTabProps> = ({ store, dispatch }) => {
  const { path } = useRouteMatch();
  useTraceLocation(path, dispatch);
  useRestoreScroll(store.scrollPositionY);
  return (
    <UserPage store={store.userPage} dispatch={dispatch} />
  );
};

export default UserTab;
