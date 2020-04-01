import React, { FC, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import * as H from 'history';
import Heading from '../../atoms/Heading';
import { BackButton, OptionButton } from '../../molecules/ButtonInstance';
import styles from './style.module.scss';

export type NavigationBarProps = {
  title: string;
  backButtonProps: {
    to: H.LocationDescriptor<H.History.PoorMansUnknown> | ((location: H.Location<H.History.PoorMansUnknown>) => H.LocationDescriptor<H.History.PoorMansUnknown>);
    onClick?: (e: MouseEvent) => void;
  };
}

const NavigationHeader: FC<NavigationBarProps> = ({ title, backButtonProps }) => {
  return (
    <header className={styles.navigationHeader}>
      <Link to={backButtonProps.to}>
        <BackButton onClick={backButtonProps.onClick}/>
      </Link>
      <Heading level="2">{title}</Heading>
      <OptionButton onClick={() => alert('clicked')}/>
    </header>
  );
};

export default NavigationHeader;
