import React, { FC } from 'react';

import { Tag } from '@mtg-maple/web-components';

import Header from '../../organisms/Header';
import SearchBar from '../../organisms/SearchBar';
import styles from './style.module.scss';

export type HomeTemplateProps = {
  searchBar: {
    queryState: [string, (newQuery: string) => void];
    tagsState: [Tag[], (newTags: any[]) => void];
    onClick: (e: React.MouseEvent) => void;
  }
}

const HomeTemplate: FC<HomeTemplateProps> = ({ searchBar }) => {
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
    </div>
  );
}

export default HomeTemplate;