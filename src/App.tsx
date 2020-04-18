import React, { FC, useContext, useEffect, useState } from 'react';
import {
  Switch,
  Route,
  Redirect,
  useHistory,
} from 'react-router-dom';
import Amplify, { Auth } from 'aws-amplify';
import { Authenticator } from 'aws-amplify-react';
import { faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

import useStore from './store';
import { AuthContextProvider, AppLocationContext, AuthContext } from './context';
import { TabIdentifier } from './utils/location';
import styles from './style.module.scss';
import HomePage from './components/pages/HomePage';
import UserPage from './components/pages/UserPage';
import SearchPage from './components/pages/SearchPage';
import DeckPage from './components/pages/DeckPage';
import CardPage from 'src/components/pages/CardPage';
import TabBar from './components/organisms/TabBar';
import Description from './components/atoms/Description';
import Input from './components/molecules/Input';
import { SignInButton } from 'src/components/molecules/ButtonInstance';

Amplify.configure({
  Auth: {
    // REQUIRED - Amazon Cognito Region
    region: process.env.REACT_APP_AWS_COGNITO_REGION,

    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: process.env.REACT_APP_AWS_COGNITO_USER_POOL_ID,

    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: process.env.REACT_APP_AWS_COGNITO_USER_POOL_WEB_CLIENT_ID,
  }
});

const App: FC = () => {
  const [store, dispatch] = useStore();
  const history = useHistory();
  const { authState, onStateChange } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    console.log(`REACT_APP_AWS_COGNITO_USER_POOL_ID: ${process.env.REACT_APP_AWS_COGNITO_USER_POOL_ID}`);
    console.log(authState);
  }, [authState]);
  return (
    <AppLocationContext.Provider value={{ lastLocation: store.lastLocation }}>
      <div className={styles.app}>
      {
            authState !== 'signedIn' ?
              <Switch>
                <Route path="/signin">
                  <Description>signin</Description>
                  <Input value={username} setValue={setUsername} />
                  <Input value={password} setValue={setPassword} />
                  <SignInButton onClick={() => {
                    Auth.signIn(username, password)
                      .then((data) => {
                        if (onStateChange) {
                          onStateChange('signedIn', data);
                          history.push('/');
                        }
                      })
                      .catch((err) => {
                        alert(JSON.stringify(err));
                      })
                  }}/>
                </Route>
                <Route path="/">
                  <Description>home</Description>
                </Route>
              </Switch>
              :
              <>
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
              </>
          }
      </div>
    </AppLocationContext.Provider>
  );
}

const withAuthenticator = (component: FC): FC => {
  const Component = component;
  return () => (
    <Authenticator hideDefault>
      <AuthContextProvider>
        <Component />
      </AuthContextProvider>
    </Authenticator>
  );
}

export default withAuthenticator(App);
