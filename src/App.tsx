import React, { FC } from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

import TabBar from './components/organisms/TabBar';

import useStore from './store';
import { AppLocationContext } from './context';
import { TabIdentifier } from './utils/location';
import styles from './style.module.scss';
import HomePage from './components/pages/HomePage';
import UserPage from './components/pages/UserPage';
import SearchPage from './components/pages/SearchPage';
import DeckPage from './components/pages/DeckPage';
import CardPage from 'src/components/pages/CardPage';

const App: FC = () => {
  const [store, dispatch] = useStore();

  return (
    <AppLocationContext.Provider value={{ lastLocation: store.lastLocation }}>
      <div className={styles.app}>
        <section className={styles.appView}>
          <Switch>
            <Route path="/home">
              <HomePage store={store.homePage} dispatch={dispatch} />
            </Route>
            <Route path="/search">
              <SearchPage store={store.searchPage} dispatch={dispatch} />
            </Route>
            <Route path="/user">
              <UserPage store={store.userPage} dispatch={dispatch} />
            </Route>
            <Route path="/decks/:id">
              <DeckPage store={store.deckPage} dispatch={dispatch} />
            </Route>
            <Route path="/cards/:id">
              <CardPage store={store.cardPage} dispatch={dispatch} />
            </Route>
            <Redirect from="/" to="/home" />
          </Switch>
        </section>
        <TabBar 
          className={styles.tabBar} 
          dispatch={dispatch}
          tabs={[
            {
              tabIdentifier: TabIdentifier.Home,
              icon: faHome,
              to: '/home',
            },
            { 
              tabIdentifier: TabIdentifier.Search,
              icon: faSearch,
              to: '/search',
            },
            { 
              tabIdentifier: TabIdentifier.User,
              icon: faUser,
              to: '/user',
            },
        ]} />
      </div>
    </AppLocationContext.Provider>
  );
}

export default App;
