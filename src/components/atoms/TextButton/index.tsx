import React, { ReactElement } from 'react';

import styles from './style.module.scss';

export interface TextButtonProps {
  /** 
   * Label of the button
  */
  label: string;

  /**
   * Color of the button
   * @default 'primary'
   */
  color?: 'primary' | 'secondary';

  /**
   * Add style 'width: 100%'
   * @default false
   */
  grow?: boolean;

  /** 
   * @default false
  */
 disabled?: boolean;

  /**
   * Handler of click events
   */
  onClick?: (e: React.MouseEvent) => void;
}

const TextButton = (props: TextButtonProps): ReactElement => (
  <button
    className={`
      ${styles.textButton} ${styles[props.color || 'primary']}
      ${props.grow ? styles.grow : ''}
    `}
    disabled={props.disabled || false}
    onClick={props.onClick}
  >
    {props.label}
  </button>
);

export default TextButton;
