import React from 'react';
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

import styles from './style.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route path="/home">
            <HomePage/>
          </Route>
          <Route path="/search">
            <SearchPage/>
          </Route>
          <Route path="/user">
            <UserPage/>
          </Route>
          <Redirect from='/' to='/home'/>
        </Switch>
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
