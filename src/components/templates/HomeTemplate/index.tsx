import React, { FC, MouseEvent } from 'react';

import Header from '../../organisms/Header';
import SearchBar from '../../organisms/SearchBar';
import DeckList from '../../organisms/DeckList';

import styles from './style.module.scss';
import { ISearchTag, IDeckListItem } from '../../../models';

export type HomeTemplateProps = {
  searchBar: {
    query: string;
    setQuery: (newQuery: string) => void;
    tags: ISearchTag[];
    setTags: (newTags: ISearchTag[]) => void;
    onClick: (e: React.MouseEvent) => void;
  }
  deckList?: {
    decks: IDeckListItem[];
    onClicks: ((e: MouseEvent) => void)[];
  }
}

const HomeTemplate: FC<HomeTemplateProps> = ({ searchBar, deckList }) => {
  return (
    <div className={styles.root}>
      <section className={styles.default}>
        <Header headingText="自分のデッキ" funcProps={{
          options: [
              { label: 'スタンダード', value: 'standard'},
              { label: 'パイオニア', value: 'pioneer'},
              { label: 'モダン', value: 'modern'},
              { label: 'レガシー', value: 'legacy'},
          ]
        }}/>
        <SearchBar className={styles.searchBar} placeholder="デッキの名前、説明" {...searchBar}/>
      </section>
      {
        typeof deckList === 'undefined' ?
          'loading...' : 
          <DeckList decks={deckList.decks} onClicks={deckList.onClicks} className={styles.deckList}/>
      }
    </div>
  );
}

export default HomeTemplate;