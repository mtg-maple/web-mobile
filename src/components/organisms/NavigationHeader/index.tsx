import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import Heading from '../../atoms/Heading';
import { BackButton, OptionButton } from '../../molecules/ButtonInstance';
import styles from './style.module.scss';

export type NavigationBarProps = {
  title: string;
  pathBackward: string;
}

const NavigationHeader: FC<NavigationBarProps> = ({ title, pathBackward }) => {
  let history = useHistory();
  return (
    <header className={styles.navigationHeader}>
      <BackButton onClick={() => history.push(pathBackward)}/>
      <Heading level="2">{title}</Heading>
      <OptionButton onClick={() => alert('clicked')}/>
    </header>
  );
};

export default NavigationHeader;
