import React, { FC } from 'react';

import Header from '../../organisms/Header';
import SearchBar from '../../organisms/SearchBar';
import { ISearchTag, ICard } from '../../../models';
import CardList from '../../organisms/CardList';

import styles from './style.module.scss';

export type SearchTemplateProps = {
  searchBar: {
    query: string;
    setQuery: (newQuery: string) => void;
    tags: ISearchTag[];
    setTags: (newTags: ISearchTag[]) => void;
    onClick: (e: React.MouseEvent) => void;
  };
  cards: ICard[];
}

const SearchTemplate: FC<SearchTemplateProps> = ({ searchBar, cards }) => {
  return (
    <>
      <section className={styles.default}>
        <Header headingText="Search"/>
        <SearchBar className={styles.searchBar} placeholder="Card's name, description" {...searchBar}/>
      </section>
      <section className={styles.list}>
        <CardList cards={cards} onClicks={cards.map((card: ICard) => () => alert(`${card.name} clicked`))}/>
      </section>
    </>
  );
}

export default SearchTemplate;