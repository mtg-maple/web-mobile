import React, { FC } from 'react';

import Header from '../../organisms/Header';
import SearchBar from '../../organisms/SearchBar';
import { ISearchTag } from '../../../models';

import styles from './style.module.scss';

export type SearchTemplateProps = {
  searchBar: {
    query: string;
    setQuery: (newQuery: string) => void;
    tags: ISearchTag[];
    setTags: (newTags: ISearchTag[]) => void;
    onClick: (e: React.MouseEvent) => void;
  };
}

const SearchTemplate: FC<SearchTemplateProps> = ({ searchBar }) => {
  return (
    <>
      <section className={styles.default}>
        <Header headingText="Search"/>
        <SearchBar className={styles.searchBar} placeholder="Card's name, description" {...searchBar}/>
      </section>
    </>
  );
}

export default SearchTemplate;