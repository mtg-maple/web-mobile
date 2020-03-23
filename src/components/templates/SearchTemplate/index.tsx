import React, { FC } from 'react';

import Header from '../../organisms/Header';

export type SearchTemplateProps = {

}

const SearchTemplate: FC<SearchTemplateProps> = () => {
  return (
    <>
      <Header headingText="Search"/>
    </>
  );
}

export default SearchTemplate;