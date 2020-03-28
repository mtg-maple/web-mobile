import React, { FC, useState, useEffect } from 'react';
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
import { Tag } from './components/molecules/Tags';
import RestoredScroll from './hooks/RestoredScroll';
import { setSearchBarQuery } from './store';
import { Deck, getDecks, IResponse, DecksPage } from './mock';
import useStore from './store';

import styles from './style.module.scss';


const App: FC = () => {
  const [store, dispatch] = useStore();

  const decksState = useState<Deck[]>([]);
  const homePageProps = {
    query: store.tabs.home.searchBar.query, 
    setQuery: (query: string) => dispatch(setSearchBarQuery('home', query)),
    tagsState: useState<Tag[]>([]),
    decksState,
  };

  const setDecks = decksState[1];
  useEffect(() => {
    getDecks('').then((res: IResponse<DecksPage>) => {
      if (res.status === 200) {
        setDecks(res.result.data);
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.app}>
      <Router>
          <section className={styles.appView}>
            <Switch>
              <Route path="/home">
                <RestoredScroll tab="home" store={store} dispatch={dispatch}>
                  <Switch>
                    <Route path="/home/decks/:id">
                      <DeckPage/>
                    </Route>
                    <Redirect from="/home/decks" to="/home"/>
                    <Route path="/home">    
                      <HomePage {...homePageProps}/>
                    </Route>
                  </Switch>
                </RestoredScroll>
              </Route>
              <Route path="/search">
                <RestoredScroll tab="search" store={store} dispatch={dispatch}>
                  <SearchPage/>
                </RestoredScroll>
              </Route>
              <Route path="/user">
                <RestoredScroll tab="user" store={store} dispatch={dispatch}>
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
