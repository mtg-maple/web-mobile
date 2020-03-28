import React, { FC, ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import styles from './style.module.scss';

export type IconProps = {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'text' | 'muteText';
  className?: string;
}

type internalIconProps = {
  icon: IconDefinition;
  size: 'small' | 'medium' | 'large';
  color: 'primary' | 'secondary' | 'text' | 'muteText';
  className?: string;
}

const faIcon: FC<internalIconProps> = ({ icon, size, color, className }) => (
    <FontAwesomeIcon icon={icon} className={[styles.moreIcon, styles[size], styles[color], className].join(' ')}/>
);

const iconFactory = (icon: IconDefinition): FC<IconProps> => {
  const FAIcon = faIcon;
  return ({ size = 'medium', color = 'text', className }): ReactElement => (
    <FAIcon {...{ icon, size, color, className }}/>
  );
};

export const MoreIcon = iconFactory(faChevronRight);
