import React, { FC, useContext, useEffect } from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Amplify from 'aws-amplify';
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
import SignInPage from 'src/components/pages/SignInPage';
import TabBar from './components/organisms/TabBar';
import awsconfig from 'src/aws-exports';

Amplify.configure(awsconfig);
Amplify.configure({
  aws_appsync_graphqlEndpoint: process.env.REACT_APP_AWS_APPSYNC_API_URL,
  aws_appsync_region: process.env.REACT_APP_AWS_APPSYNC_REGION,
  aws_appsync_authenticationType: process.env.REACT_APP_AWS_APPSYNC_AUTHENTICATION_TYPE,
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
  const { authState } = useContext(AuthContext);
  useEffect(() => {
    console.log(authState);
  }, [authState]);
  return (
    <AppLocationContext.Provider value={{ lastLocation: store.lastLocation }}>
      <div className={styles.app}>
      {
            authState === 'loading' ?
              <>loading...</>
            :
            authState !== 'signedIn' ?
              <Switch>
                <Route path="/signin">
                  <SignInPage />
                </Route>
                <Redirect to="/signin" />
              </Switch>
            :
              <>
                <section className={styles.appView}>
                  <Switch>
                    <Route path="/:username/d/:deckId">
                      <DeckPage store={store.deckPage} dispatch={dispatch} />
                    </Route>
                    <Route path="/home">
                      <HomePage store={store.homePage} dispatch={dispatch} />
                    </Route>
                    <Route path="/search">
                      <SearchPage store={store.searchPage} dispatch={dispatch} />
                    </Route>
                    <Route path="/user">
                      <UserPage store={store.userPage} dispatch={dispatch} />
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
