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
import useTraceLocation from '../../hooks/useTraceLocation';
import useRestoreScroll from '../../hooks/useRestoreScroll';
import useScrollSaveOnUnmount from '../../hooks/useScrollSaveOnUnmount';

export type HomeTabProps = {
  store: IHomeTabStore,
  dispatch: Dispatch<IAction>,
};

const HomeTab: FC<HomeTabProps> = ({store, dispatch}) => {
  const { path } = useRouteMatch();
  useTraceLocation(path, dispatch);
  useRestoreScroll(store.scrollPositionY);
  useScrollSaveOnUnmount(dispatch);
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
