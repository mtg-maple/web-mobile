import React, { FC, Dispatch, SetStateAction } from 'react';

import HomeTemplate from '../../templates/HomeTemplate';
import { Deck } from '../../../mock';
import { ISearchTag } from '../../../store';
// import { Deck, getDecks, IResponse, DecksPage } from '../../../mock';

export type HomePageProps = {
  query: string;
  setQuery: (newQuery: string) => void;
  tags: ISearchTag[];
  setTags: (newTags: ISearchTag[]) => void;
  decksState: [Deck[], Dispatch<SetStateAction<Deck[]>>];
}

const HomePage: FC<HomePageProps> = ({ query, setQuery, tags, setTags, decksState }) => {
  const searchBar = {
    query,
    setQuery,
    tags,
    setTags,
    onClick: () => alert('clicked'),
  }
  const decks = decksState[0];
  
  const props = { searchBar, decks };
  return (
    <HomeTemplate { ...props }/>
  );
};

export default HomePage;