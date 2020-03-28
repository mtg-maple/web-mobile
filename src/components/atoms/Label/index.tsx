import React, { FC } from 'react';

import styles from './style.module.scss';

export type LabelProps = {
  /**
   * Text to show
   */
  text: string;

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

const Label: FC<LabelProps> = ({ text, color = 'text', size = 'medium', weight = 'default', className = '' }) => (
  <span className={[styles.label, styles[color], styles[size], styles[weight], className].join(' ')}>
    {text}
  </span>
)

export default Label;