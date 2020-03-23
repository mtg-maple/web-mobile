import React, { FC } from 'react';
import { Heading, Select, SelectProps, isSelectProps, isIconButtonProps, IconButton, IconButtonProps } from '@mtg-maple/web-components';

import styles from './style.module.scss';

export type HeaderProps = {
  headingText: string;
  funcProps?: SelectProps | IconButtonProps;
};

const Header: FC<HeaderProps> = ({ headingText, funcProps }) => {
  return (
    <header className={styles.header}>
      <Heading level='1'>{headingText}</Heading>
      {
        funcProps &&
        (
          isSelectProps(funcProps) ? <Select {...funcProps}/> :
          isIconButtonProps(funcProps) ? <IconButton {...funcProps}/> :
          ''
        )
      }
    </header>
  );
};

export default Header;