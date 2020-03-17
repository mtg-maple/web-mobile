import React, { FC } from 'react';
import { faSlidersH, faSearch } from '@fortawesome/free-solid-svg-icons';
import { IconButton, Input, Tags, Tag } from '@mtg-maple/web-components';

import styles from './style.module.scss';

export type SearchBarProps = {
  query: string;
  setQuery: (newQuery: string) => void;
  placeholder?: string;
  tags: Tag[];
  setTags: (newTags: any[]) => void;
  onClick: (e: React.MouseEvent) => void;
};

const SearchBar: FC<SearchBarProps> = ({ query, setQuery, placeholder = '', tags, setTags, onClick }) => {
  return (
    <div className={styles.searchBarWrap}>
      <div className={styles.searchBar}>
        <Input
          value={query}
          setValue={setQuery}
          placeholder={placeholder}
          icon={faSearch}
        />
        <IconButton 
          className={styles.settingButton}
          icon={faSlidersH}
          color={tags.length > 0 ? 'primary' : 'muteText'}
          onClick={onClick}
        />
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