import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

import TabBar from './components/organisms/TabBar';
import HomePage from './components/pages/HomePage';
import SearchPage from './components/pages/SearchPage';
import UserPage from './components/pages/UserPage';
import DeckPage from './components/pages/DeckPage';
import RestoredScroll from './hooks/RestoredScroll';
import useStore from './store';

import styles from './style.module.scss';


const App: FC = () => {
  const [store, dispatch] = useStore();
  
  return (
    <div className={styles.app}>
      <Router>
          <section className={styles.appView}>
            <Switch>
              <Route path="/home">
                <RestoredScroll store={store} dispatch={dispatch}>
                  <Switch>
                    <Route path="/home/decks/:id">
                      <DeckPage { ...{dispatch} }/>
                    </Route>
                    <Redirect from="/home/decks" to="/home"/>
                    <Route path="/home">    
                      <HomePage { ...{ store: store.homeTab.homePage, dispatch } }/>
                    </Route>
                  </Switch>
                </RestoredScroll>
              </Route>
              <Route path="/search">
                <RestoredScroll store={store} dispatch={dispatch}>
                  <SearchPage/>
                </RestoredScroll>
              </Route>
              <Route path="/user">
                <RestoredScroll store={store} dispatch={dispatch}>
                  <UserPage/>
                </RestoredScroll>
              </Route>
              <Redirect from="/" to="/home"/>
            </Switch>
          </section>
        <TabBar className={styles.tabBar} links={[
          { icon: faHome, link: '/home' },
          { icon: faSearch, link: '/search' },
          { icon: faUser, link: '/user' },
        ]}/>
      </Router>
    </div>
  );
}

export default App;
