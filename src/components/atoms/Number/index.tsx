import React, { FC } from 'react';

import styles from './style.module.scss';

type NumberProps = {
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

const Number: FC<NumberProps> = ({ num, color = 'text', size = 'medium' }) => (
  <span className={[styles.number, styles[color], styles[size]].join(' ')}>
    {num}
  </span>
)

export default Number;