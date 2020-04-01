import React, { FC, Dispatch }  from 'react';

import UserTemplate from '../templates/UserTemplate';
import { IUserPageStore, IAction } from '../../store';
import useScrollSaveOnUnmount from '../../hooks/useScrollSaveOnUnmount';
import useScrollRestoreOnMount from '../../hooks/useScrollRestoreOnMount';

export type UserPageProps = {
  store: IUserPageStore,
  dispatch: Dispatch<IAction>,
}

const UserPage: FC<UserPageProps> = ({ store, dispatch }) => {
  useScrollSaveOnUnmount(dispatch);
  useScrollRestoreOnMount(store, dispatch);

  return (
    <UserTemplate />
  )
};

export default UserPage;