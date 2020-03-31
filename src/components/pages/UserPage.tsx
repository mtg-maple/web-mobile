import React, { FC, Dispatch, useContext }  from 'react';

import UserTemplate from '../templates/UserTemplate';
import useInitScroll from '../../hooks/useInitScroll';
import { IUserPageStore, IAction } from '../../store';
import { AppLocationContext } from '../../context';

export type UserPageProps = {
  store: IUserPageStore,
  dispatch: Dispatch<IAction>,
}

const UserPage: FC<UserPageProps> = ({ store, dispatch }) => {
  const { lastLocation } = useContext(AppLocationContext);
  useInitScroll(lastLocation);

  return (
    <UserTemplate />
  )
};

export default UserPage;