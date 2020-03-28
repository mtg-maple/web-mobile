import React, { FC } from 'react';

import { Tag } from '../../molecules/Tags';

import Header from '../../organisms/Header';
import SearchBar from '../../organisms/SearchBar';
import DeckList from '../../organisms/DeckList';
import { Deck } from '../../../mock';

import styles from './style.module.scss';

export type HomeTemplateProps = {
  searchBar: {
    queryState: [string, (newQuery: string) => void];
    tagsState: [Tag[], (newTags: any[]) => void];
    onClick: (e: React.MouseEvent) => void;
  }
  decks: Deck[];
}

const HomeTemplate: FC<HomeTemplateProps> = ({ searchBar, decks }) => {
  return (
    <div className={styles.root}>
      <Header headingText="自分のデッキ" funcProps={{
        options: [
            { label: 'スタンダード', value: 'standard'},
            { label: 'パイオニア', value: 'pioneer'},
            { label: 'モダン', value: 'modern'},
            { label: 'レガシー', value: 'legacy'},
        ]
      }}/>
      <SearchBar className={styles.searchBar} placeholder="デッキの名前、説明" {...searchBar}/>
      <DeckList decks={decks} className={styles.deckList}/>
    </div>
  );
}

export default HomeTemplate;