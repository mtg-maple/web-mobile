import React, { FC } from 'react';
import { faSlidersH, faSearch } from '@fortawesome/free-solid-svg-icons';
import { IconButton, Input, Tags, Tag } from '@mtg-maple/web-components';

import styles from './style.scss';

export type SearchBarProps = {
  query: string;
  setQuery: (newQuery: string) => void;
  queryPlaceholder?: string;
  tags: Tag[];
  setTags: (newTags: any[]) => void;
};

const SearchBar: FC<SearchBarProps> = ({ query, setQuery, queryPlaceholder = '', tags, setTags }) => {
  return (
    <div className={styles.searchBarWrap}>
      <div className={styles.searchBar}>
        <Input
          value={query}
          setValue={setQuery}
          placeholder={queryPlaceholder}
          icon={faSearch}
        />
        <IconButton icon={faSlidersH}/>
      </div>
      {
        tags.length > 0 &&
        <div className={styles.tags}>
          <Tags tags={tags} setTags={setTags}/>
        </div>
      }
    </div>
  );
};

export default SearchBar;