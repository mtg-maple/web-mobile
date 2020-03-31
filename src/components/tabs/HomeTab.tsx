import React, { FC, Dispatch } from 'react';
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from 'react-router-dom';

import HomePage from '../pages/HomePage';
import DeckPage from '../pages/DeckPage';
import { IAction, IHomeTabStore } from '../../store';
import useUpdateLocation from '../../hooks/useUpdateLocation';
import useRestoreScroll from '../../hooks/useRestoreScroll';

export type HomeTabProps = {
  store: IHomeTabStore,
  dispatch: Dispatch<IAction>,
};

const HomeTab: FC<HomeTabProps> = ({store, dispatch}) => {
  const { path } = useRouteMatch();
  useUpdateLocation(path, dispatch);
  useRestoreScroll(store.scrollPositionY);
  return (
    <Switch>
      <Route path="/home/decks/:id">
        <DeckPage { ...{ store: store.deckPage, dispatch, pathBackward: store.beforeLastLocation?.pathname || '/home' } }/>
      </Route>
      <Redirect from="/home/decks" to="/home"/>
      <Route path="/home">
        <HomePage {...{ store: store.homePage, dispatch }}/>
      </Route>
    </Switch>
  );
};

export default HomeTab;
