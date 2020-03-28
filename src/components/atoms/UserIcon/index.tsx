import React, { FC, ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './style.module.scss';

export type UserIconProps = {
  alt: string;
  src?: string;
  size?: 'large' | 'medium' | 'small';
  color?: 'primary' | 'secondary' | 'text' | 'muteText';
  linkUrl?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const UserIcon: FC<UserIconProps> = ({ alt, src, size = 'medium', color = 'text', linkUrl = '#', onClick }) => {
  let InnerIcon: FC;
  if (src) {
    InnerIcon = (): ReactElement => <img className={[styles.iconImg, styles[size]].join(' ')} src={src} alt={alt}></img>;
  } else {
    InnerIcon = (): ReactElement => <FontAwesomeIcon className={[styles.altIcon, styles[color], styles[size]].join(' ')} icon={faUserCircle}/>;
  }
  return (
      onClick || linkUrl !== '#' ? <a href={linkUrl || '#'} onClick={onClick}><InnerIcon/></a> : <InnerIcon/>
  );
}

export default UserIcon;
