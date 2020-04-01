import React, { FC, Dispatch }  from 'react';

import UserTemplate from '../templates/UserTemplate';
import { IUserPageStore, IAction } from '../../store';
import {
  useScrollSaveOnUnmount,
  useScrollRestoreOnMount,
  useLocationSaveOnUnmount,
} from '../../hooks';

export type UserPageProps = {
  store: IUserPageStore,
  dispatch: Dispatch<IAction>,
}

const UserPage: FC<UserPageProps> = ({ store, dispatch }) => {
  useScrollSaveOnUnmount(dispatch);
  useScrollRestoreOnMount(store, dispatch);
  useLocationSaveOnUnmount(dispatch);

  return (
    <UserTemplate />
  )
};

export default UserPage;