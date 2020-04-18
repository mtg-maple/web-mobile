import React, { FC } from 'react';

import Header from '../../organisms/Header';
import { SignOutButton } from 'src/components/molecules/ButtonInstance';

export type UserTemplateProps = {
  onSignOutButtonClicked: () => void;
}

const UserTemplate: FC<UserTemplateProps> = ({ onSignOutButtonClicked }) => {
  return (
    <>
      <Header headingText="My Page"/>
      <SignOutButton onClick={onSignOutButtonClicked}/>
    </>
  );
}

export default UserTemplate;