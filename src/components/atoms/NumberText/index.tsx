import React, { FC } from 'react';

import styles from './style.module.scss';

type NumberTextProps = {
  /**
   * Number to show
   */
  num: number;

  /**
   * @default 'text'
   */
  color?: 'text' | 'muteText';

  /**
   * @default 'medium'
   */
  size?: 'large' | 'medium' | 'small';
}

const NumberText: FC<NumberTextProps> = ({ num, color = 'text', size = 'medium' }) => (
  <span className={[styles.number, styles[color], styles[size]].join(' ')}>
    {num}
  </span>
)

export default NumberText;