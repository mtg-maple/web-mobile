import React, { FC, useState } from 'react';

import { Tag } from '@mtg-maple/web-components';
import HomeTemplate from '../../templates/HomeTemplate';

export type HomePageProps = {

}

const HomePage: FC<HomePageProps> = ({}) => {
  const searchBar = {
    queryState: useState(''),
    tagsState: useState<Tag[]>([]),
    onClick: () => alert('clicked'),
  }
  const props = { searchBar }
  return (
    <HomeTemplate { ...props }/>
  )
};

export default HomePage;