import React, { FC } from 'react';
import { faSlidersH, faSearch } from '@fortawesome/free-solid-svg-icons';

import IconButton from '../../atoms/IconButton';
import Input from '../../molecules/Input';
import Tags, { Tag } from '../../molecules/Tags';

import styles from './style.module.scss';

export type SearchBarProps = {
  query: string;
  setQuery: (newQuery: string) => void;
  tagsState: [Tag[], (newTags: any[]) => void];
  placeholder?: string;
  onClick: (e: React.MouseEvent) => void;
  className?: string;
};

const SearchBar: FC<SearchBarProps> = ({ query, setQuery, placeholder = '', tagsState, onClick, className }) => {
  return (
    <div className={[styles.searchBarWrap, className].join(' ')}>
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