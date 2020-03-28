import React, { FC, useState, useEffect } from 'react';

import { Tag } from '../../molecules/Tags';
import HomeTemplate from '../../templates/HomeTemplate';
import { Deck, getDecks, IResponse, DecksPage } from '../../../mock';

const HomePage: FC = () => {
  const searchBar = {
    queryState: useState(''),
    tagsState: useState<Tag[]>([]),
    onClick: () => alert('clicked'),
  }
  
  const [decks, setDecks] = useState<Deck[]>([]);
  useEffect(() => {
    getDecks('').then((res: IResponse<DecksPage>) => {
      if (res.status === 200) {
        setDecks(res.result.data);
      }
    });
  });
  
  const props = { searchBar, decks };
  return (
    <HomeTemplate { ...props }/>
  )
};

export default HomePage;