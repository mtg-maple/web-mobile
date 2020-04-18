import React, { FC, Dispatch, useContext }  from 'react';
import { useHistory } from 'react-router-dom';
import { Auth } from 'aws-amplify';

import UserTemplate from '../templates/UserTemplate';
import { IUserPageStore } from '../../models';
import { IAction } from '../../store';
import {
  useScrollSaveOnUnmount,
  useScrollRestoreOnMount,
  useLocationSaveOnUnmount,
} from '../../hooks';
import { AuthContext } from 'src/context';

export type UserPageProps = {
  store: IUserPageStore,
  dispatch: Dispatch<IAction>,
}

const UserPage: FC<UserPageProps> = ({ store, dispatch }) => {
  const { onStateChange } = useContext(AuthContext);
  const history = useHistory();
  useScrollSaveOnUnmount(dispatch);
  useScrollRestoreOnMount(store, dispatch);
  useLocationSaveOnUnmount(dispatch);

  return (
    <UserTemplate onSignOutButtonClicked={() => {
      Auth.signOut()
        .then(data => {
          alert(JSON.stringify(data));
          if (onStateChange) {
            onStateChange('signIn', data);
            history.push('/');
          }
        })
        .catch(err => {
          alert(JSON.stringify(err));
        });
    }}/>
  )
};

export default UserPage;