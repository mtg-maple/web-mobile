import React, { FC, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import * as H from 'history';
import Heading from '../../atoms/Heading';
import { BackButton, OptionButton } from '../../molecules/ButtonInstance';
import styles from './style.module.scss';

export type NavigationBarProps = {
  title?: string;
  backButtonProps: {
    to: H.LocationDescriptor<H.History.PoorMansUnknown> | ((location: H.Location<H.History.PoorMansUnknown>) => H.LocationDescriptor<H.History.PoorMansUnknown>);
    onClick?: (e: MouseEvent) => void;
  };
  className?: string;
  isSimple?: boolean;
}

const NavigationHeader: FC<NavigationBarProps> = ({ title, isSimple = false, backButtonProps, className }) => {
  let classNames = [styles.navigationHeader, className];
  if (isSimple) {
    classNames.push(styles.simple);
  }
  return (
    <header className={classNames.join(' ')}>
      <Link to={backButtonProps.to}>
        <BackButton onClick={backButtonProps.onClick}/>
      </Link>
      {
        title && 
        <Heading level="2" hidden={isSimple}>{title}</Heading>
      }
      <OptionButton onClick={() => alert('clicked')}/>
    </header>
  );
};

export default NavigationHeader;
