import React, { FC, Dispatch, SetStateAction } from 'react';

import { Tag } from '../../molecules/Tags';
import HomeTemplate from '../../templates/HomeTemplate';
import { Deck } from '../../../mock';
// import { Deck, getDecks, IResponse, DecksPage } from '../../../mock';

export type HomePageProps = {
  query: string;
  setQuery: (query: string) => void;
  tagsState: [Tag[], Dispatch<SetStateAction<Tag[]>>];
  decksState: [Deck[], Dispatch<SetStateAction<Deck[]>>];
}

const HomePage: FC<HomePageProps> = ({ query, setQuery, tagsState, decksState }) => {
  const searchBar = {
    query,
    setQuery,
    tagsState,
    onClick: () => alert('clicked'),
  }
  const decks = decksState[0];
  
  const props = { searchBar, decks };
  return (
    <HomeTemplate { ...props }/>
  );
};

export default HomePage;