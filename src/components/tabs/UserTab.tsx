import React, { FC, Dispatch } from 'react';

import UserPage from '../pages/UserPage';
import { IUserTabStore, IAction } from '../../store';

export type UserTabProps = {
  store: IUserTabStore,
  dispatch: Dispatch<IAction>,
}

const UserTab: FC<UserTabProps> = ({ store, dispatch }) => {
  return (
    <UserPage store={store.userPage} dispatch={dispatch} />
  );
};

export default UserTab;
