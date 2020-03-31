import React, { FC } from 'react';
import {
  Switch,
  Route,
  Redirect,
  useLocation,
} from 'react-router-dom';
import { faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

import TabBar from './components/organisms/TabBar';
import HomeTab from './components/tabs/HomeTab';
import SearchTab from './components/tabs/SearchTab';
import UserTab from './components/tabs/UserTab';
import useStore, { setScrollPosition } from './store';
import { AppLocationContext } from './context';

import styles from './style.module.scss';
const App: FC = () => {
  const [store, dispatch] = useStore();
  let { pathname } = useLocation();

  const onTabChange = () => {
    const scrollPositionY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    dispatch(setScrollPosition(pathname, scrollPositionY));
  }

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
        <TabBar className={styles.tabBar} links={[
          { icon: faHome, link: store.homeTab.lastLocation?.pathname || '/home', onClick: () => onTabChange() },
          { icon: faSearch, link: store.searchTab.lastLocation?.pathname || '/search', onClick: () => onTabChange() },
          { icon: faUser, link: store.userTab.lastLocation?.pathname || '/user', onClick: () => onTabChange() },
        ]} />
      </div>
    </AppLocationContext.Provider>
  );
}

export default App;
