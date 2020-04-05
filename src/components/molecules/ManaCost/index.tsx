import React, { FC, ReactElement } from 'react';
import MagicSymbol from '../../atoms/MagicSymbol';
import { containPresenter } from '../../../utils';

import styles from './style.module.scss';

export type ManaCostProps = {
  value: string;

  /**
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export type ManaCostPresenterProps = {
  symbols: string[];
  size: 'small' | 'medium' | 'large';
  className: string;
}

export const ManaCostPresenter: FC<ManaCostPresenterProps> = ({ symbols, size, className }) => (
  <ul className={[styles.manaCostItemList, className].join(' ')}>
    {
      symbols.map((symbol: string, index: number) => (
        <li key={`${symbol}${index}`} className={[styles.manaCostItem, styles[size]].join(' ')}>
          <MagicSymbol type="cost" value={symbol} size={size}/>
        </li>
      ))
    }
  </ul>
);

export const ManaCostContainer = (presenter: FC<ManaCostPresenterProps>, props: ManaCostProps): ReactElement | null => {
  const symbols = props.value.trim().slice(1, -1).split('}{');
  const className = props.className || '';
  const size = props.size || 'medium';
  return presenter({ symbols, size, className });
};

const ManaCost: FC<ManaCostProps> = (props) => containPresenter<ManaCostProps, ManaCostPresenterProps>(ManaCostContainer, ManaCostPresenter)(props);

export default ManaCost;