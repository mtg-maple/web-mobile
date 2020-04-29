import React, { FC, Dispatch, useEffect, MouseEvent } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';

import HomeTemplate from '../templates/HomeTemplate';
import { 
  IAction, 
  setSearchBarQuery, 
  setSearchBarTags, 
  setDeck,
  setDeckList,
  initSubPage,
} from '../../store';
import {
//  IResponse,
  ISearchTag, 
  IHomePageStore, 
  IDeckListItem,
  Page, 
} from '../../models';
// import { IDeckListResult } from '../../services';
import {
  useScrollSaveOnUnmount,
  useScrollRestoreOnMount,
  useLocationSaveOnUnmount,
} from '../../hooks';

export type HomePageProps = {
  store: IHomePageStore,
  dispatch: Dispatch<IAction>;
}

const getDeckListGraphQL = /* GraphQL */ `
  query GetDeckList(
    $filter: DeckListFilterInput
    $nextToken: String
    $userId: ID
  ) {
    getDeckList(filter: $filter, nextToken: $nextToken, userId: $userId) {
      items {
        id
        name
        description
        thumbnailImageUrl
        colors
      }
      nextToken
      scannedCount
    }
  }
`;

type getDeckListData = {
  getDeckList: {
    items: IDeckListItem[];
    nextToken: string;
    scannedCount: number;
  }
}

const HomePage: FC<HomePageProps> = ({ store, dispatch }) => {
  let history = useHistory();
  const currentLocation = useLocation();

  useScrollSaveOnUnmount(dispatch);
  useScrollRestoreOnMount(store, dispatch);
  useLocationSaveOnUnmount(dispatch);

  useEffect(() => {
    (async () => {
      const result = await API.graphql(graphqlOperation(getDeckListGraphQL, {}));
      if ('data' in result && result.data) {
        const data = result.data as getDeckListData;
        dispatch(setDeckList(Page.Home, data.getDeckList.items));
      }
      console.log(result);
    })().catch((err) => {
      // TODO: Error Handling
      console.error(err);
    });
  }, [dispatch]);

  const searchBar = {
    query: store.searchBar.query, 
    setQuery: (newQuery: string) => dispatch(setSearchBarQuery(Page.Home, newQuery)),
    tags: store.searchBar.tags,
    setTags: (newTags: ISearchTag[]) => dispatch(setSearchBarTags(Page.Home, newTags)),
    onClick: () => alert('clicked'),
  }
  const deckList = store.decks && {
    decks: store.decks,
    onClicks: store.decks.map((deck: IDeckListItem): (e: MouseEvent) => void => {
      return (e: MouseEvent) => {
        dispatch(initSubPage(Page.Deck, currentLocation));
        dispatch(setDeck(Page.Deck, { ...deck, mainboard: undefined, sideboard: undefined }));
        history.push(`/decks/${deck.id}`);
      };
    }),
  };
  
  const props = { searchBar, deckList };
  return (
    <HomeTemplate { ...props }/>
  );
};

export default HomePage;
