import React, { FC } from 'react';
import { faSlidersH, faSearch } from '@fortawesome/free-solid-svg-icons';
import { IconButton, Input, Tags, Tag } from '@mtg-maple/web-components';

import styles from './style.module.scss';

export type SearchBarProps = {
  queryState: [string, (newQuery: string) => void];
  tagsState: [Tag[], (newTags: any[]) => void];
  placeholder?: string;
  onClick: (e: React.MouseEvent) => void;
  className?: string;
};

const SearchBar: FC<SearchBarProps> = ({ queryState, placeholder = '', tagsState, onClick, className }) => {
  return (
    <div className={[styles.searchBarWrap, className].join(' ')}>
      <div className={styles.searchBar}>
        <Input
          value={queryState[0]}
          setValue={queryState[1]}
          placeholder={placeholder}
          icon={faSearch}
        />
        <IconButton 
          className={styles.settingButton}
          icon={faSlidersH}
          color={tagsState[0].length > 0 ? 'primary' : 'muteText'}
          onClick={onClick}
        />
      </div>
      {
        tagsState[0].length > 0 &&
        <div className={styles.tags}>
          <Tags tags={tagsState[0]} setTags={tagsState[1]}/>
        </div>
      }
    </div>
  );
};

export default SearchBar;