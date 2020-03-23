import React, { FC } from 'react';

import Header from '../../organisms/Header';

export type UserTemplateProps = {

}

const UserTemplate: FC<UserTemplateProps> = () => {
  return (
    <>
      <Header headingText="My Page"/>
    </>
  );
}

export default UserTemplate;