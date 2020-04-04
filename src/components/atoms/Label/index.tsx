import React, { FC, ReactNode } from 'react';

import styles from './style.module.scss';

export type LabelProps = {
  /**
   * Text to show
   */
  children: ReactNode;

  /**
   * @default 'text'
   */
  color?: 'text' | 'muteText';

  /**
   * @default 'medium'
   */
  size?: 'large' | 'medium' | 'small';

  /**
   * @default 'default'
   */
  weight?: 'default' | 'bold';

  className?: string;
}

const Label: FC<LabelProps> = ({ children, color = 'text', size = 'medium', weight = 'default', className = '' }) => (
  <span className={[styles.label, styles[color], styles[size], styles[weight], className].join(' ')}>
    {children}
  </span>
)

export default Label;