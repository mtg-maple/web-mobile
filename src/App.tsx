import React, { FC } from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

import TabBar from './components/organisms/TabBar';
import HomeTab from './components/tabs/HomeTab';
import SearchTab from './components/tabs/SearchTab';
import UserTab from './components/tabs/UserTab';
import useStore from './store';
import { AppLocationContext } from './context';
import { TabIdentifier } from './utils/location';
import styles from './style.module.scss';

const App: FC = () => {
  const [store, dispatch] = useStore();

  return (
    <AppLocationContext.Provider value={{ lastLocation: store.lastLocation }}>
      <div className={styles.app}>
        <section className={styles.appView}>
          <Switch>
            <Route path="/home">
              <HomeTab store={store.homeTab} dispatch={dispatch} />
            </Route>
            <Route path="/search">
              <SearchTab store={store.searchTab} dispatch={dispatch} />
            </Route>
            <Route path="/user">
              <UserTab store={store.userTab} dispatch={dispatch} />
            </Route>
            <Redirect from="/" to="/home" />
          </Switch>
        </section>
        <TabBar 
          className={styles.tabBar} 
          dispatch={dispatch}
          links={[
            {
              tabIdentifier: TabIdentifier.Home,
              icon: faHome,
              lastLocation: store.homeTab.lastLocation,
            },
            { 
              tabIdentifier: TabIdentifier.Search,
              icon: faSearch,
              lastLocation: store.searchTab.lastLocation,
            },
            { 
              tabIdentifier: TabIdentifier.User,
              icon: faUser,
              lastLocation: store.userTab.lastLocation,
            },
        ]} />
      </div>
    </AppLocationContext.Provider>
  );
}

export default App;
