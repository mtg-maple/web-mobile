import React, { FC } from 'react';

import MagicSymbol from '../../atoms/MagicSymbol';

import styles from './style.module.scss';

export type ManaColorsProps = {
  colors: ManaColor[];

  /**
   * @default 'medium'
   */
  size?: 'large' | 'medium' | 'small';

  className?: string;
}

export type ManaColor = 'W' | 'B' | 'U' | 'R' | 'G';

const ManaColors: FC<ManaColorsProps> = ({ colors, size = 'medium', className = '' }) => {
  return (
    <ul className={[styles.manaColorItemList, className].join(' ')}>
      {
        colors.map((color: ManaColor) => (
          <li className={[styles.manaColorItem, styles[size]].join(' ')}><MagicSymbol type="cost" value={color} size={size}/></li>
        ))
      }
    </ul>
  );
};

export default ManaColors;
