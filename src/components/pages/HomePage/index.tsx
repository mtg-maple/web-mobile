import React, { FC, Dispatch, SetStateAction } from 'react';

import { Tag } from '../../molecules/Tags';
import HomeTemplate from '../../templates/HomeTemplate';
import { Deck } from '../../../mock';
// import { Deck, getDecks, IResponse, DecksPage } from '../../../mock';

export type HomePageProps = {
  queryState: [string, Dispatch<SetStateAction<string>>];
  tagsState: [Tag[], Dispatch<SetStateAction<Tag[]>>];
  decksState: [Deck[], Dispatch<SetStateAction<Deck[]>>];
}

const HomePage: FC<HomePageProps> = ({ queryState, tagsState, decksState }) => {
  const searchBar = {
    queryState,
    tagsState,
    onClick: () => alert('clicked'),
  }
  const decks = decksState[0];
  
  /*
  const [decks, setDecks] = useState<Deck[]>([]);
  useEffect(() => {
    getDecks('').then((res: IResponse<DecksPage>) => {
      if (res.status === 200) {
        setDecks(res.result.data);
      }
    });
  }, []);
  */
  
  const props = { searchBar, decks };
  return (
    <HomeTemplate { ...props }/>
  );
};

export default HomePage;