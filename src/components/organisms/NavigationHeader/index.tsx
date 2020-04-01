import React, { FC, MouseEvent } from 'react';
import Heading from '../../atoms/Heading';
import { BackButton, OptionButton } from '../../molecules/ButtonInstance';
import styles from './style.module.scss';

export type NavigationBarProps = {
  title: string;
  onBackButtonClick: (e: MouseEvent) => void;
}

const NavigationHeader: FC<NavigationBarProps> = ({ title, onBackButtonClick }) => {
  return (
    <header className={styles.navigationHeader}>
      <BackButton onClick={onBackButtonClick}/>
      <Heading level="2">{title}</Heading>
      <OptionButton onClick={() => alert('clicked')}/>
    </header>
  );
};

export default NavigationHeader;
