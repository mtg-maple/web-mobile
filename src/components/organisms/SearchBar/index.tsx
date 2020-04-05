import React, { FC } from 'react';
import { faSlidersH, faSearch } from '@fortawesome/free-solid-svg-icons';

import IconButton from '../../atoms/IconButton';
import Input from '../../molecules/Input';
import Tags from '../../molecules/Tags';

import styles from './style.module.scss';
import { ISearchTag } from '../../../models';

export type SearchBarProps = {
  query: string;
  setQuery: (newQuery: string) => void;
  tags: ISearchTag[];
  setTags: (newTags: ISearchTag[]) => void;
  placeholder?: string;
  onClick: (e: React.MouseEvent) => void;
  className?: string;
};

const SearchBar: FC<SearchBarProps> = ({ query, setQuery, placeholder = '', tags, setTags, onClick, className }) => {
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