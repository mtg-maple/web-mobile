import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import styles from './style.module.scss';

export type IconButtonProps = {
  /** 
   * IconDefinition (from '@fortawesome/fontawesome-svg-core')
   * 
   * Fontawesomeのアイコン定義を渡す
   */
  icon: IconDefinition;

  /** 
   * Size of the icon
   * 
   * アイコンの大きさを指定する
   * @default 'medium'
   */
  size?: 'large' | 'medium' | 'small';

  /**
   * Color of the icon
   *  
   * アイコンの色を指定する 
   * @default 'primary'
  */
  color?: 'primary' | 'secondary' | 'text' | 'muteText';

  onClick?: (e: React.MouseEvent) => void;

  className?: string;
}

export function isIconDefinition(arg: any): arg is IconDefinition {
  return typeof arg === 'object' &&
    typeof Array.isArray(arg.icon) &&
    arg.icon.length >= 5 &&
    typeof arg.icon[0] === 'number' &&
    typeof arg.icon[1] === 'number' &&
    Array.isArray(arg.icon[2]) && arg.icon[2].every((v: any) => typeof v === 'string') &&
    typeof arg.icon[3] === 'string' &&
    (
      typeof arg.icon[4] === 'string' || 
      (Array.isArray(arg.icon[4]) && arg.icon[4].every((v: any) => typeof v === 'string'))
    );
}

export function isIconButtonProps(arg: any): arg is IconButtonProps {
  return typeof arg === 'object' && 
    isIconDefinition(arg.icon) &&
    (typeof arg.size === 'undefined' || ['large', 'medium', 'small'].includes(arg.size)) &&
    (typeof arg.color === 'undefined' || ['primary', 'secondary', 'text', 'muteText'].includes(arg.color)) &&
    (typeof arg.onChange === 'undefined' || typeof arg.onChange === 'function') && 
    (typeof arg.className === 'undefined' || typeof arg.className === 'string');
}

const IconButton: FC<IconButtonProps> = ({ icon, size = 'medium', color = 'primary', onClick, className = ''}) => (
  <button
    className={[styles.iconButton, styles[size], styles[color], className].join(' ')}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={icon}/>
  </button>
);

export default IconButton;
