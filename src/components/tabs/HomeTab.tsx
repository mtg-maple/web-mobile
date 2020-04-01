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

export type HomeTabProps = {
  store: IHomeTabStore,
  dispatch: Dispatch<IAction>,
};

const HomeTab: FC<HomeTabProps> = ({store, dispatch}) => {
  const { path } = useRouteMatch();
  useTraceLocation(path, dispatch);
  return (
    <Switch>
      <Route path="/home/decks/:id">
        <DeckPage { ...{ store: store.deckPage, dispatch, pathBackward: `${store.beforeLastLocation?.pathname}?action=back` || '/home' } }/>
      </Route>
      <Redirect from="/home/decks" to="/home"/>
      <Route path="/home">
        <HomePage {...{ store: store.homePage, dispatch }}/>
      </Route>
    </Switch>
  );
};

export default HomeTab;
