import React, { FC } from 'react';

import styles from './style.module.scss';

export type SelectOption = {
  label: string;
  value: string;
}

export function isSelectOption(arg: any): arg is SelectOption {
  return typeof arg === 'object' && typeof arg.label === 'string' && typeof arg.value === 'string';
}

export type SelectProps = {
  options: SelectOption[];

  className?: string;
  
  /**
   * text alignment in select box
   * 
   * 'ltl': left, 'rtl': right
   * @default 'auto'
   */
  dir?: 'auto' | 'ltl' | 'rtl';

  onChange?: (e: React.ChangeEvent) => void;

  onClick?: (e: React.MouseEvent) => void;
}

export function isSelectProps(arg: any): arg is SelectProps {
  return arg !== null &&
    typeof arg === 'object' &&
    Array.isArray(arg.options) && arg.options.every(isSelectOption) &&
    (typeof arg.className === 'undefined' || typeof arg.className === 'string') &&
    (typeof arg.dir === 'undefined' || ['auto', 'ltl', 'rtl'].includes(arg.dir)) &&
    (typeof arg.onChange === 'undefined' || typeof arg.onChange === 'function') &&
    (typeof arg.onClick === 'undefined' || typeof arg.onClick === 'function');
}

const Select: FC<SelectProps> = ({ options, dir = 'auto', className = '', onChange, onClick }) => {
  return (
    <select className={[styles.select, className].join(' ')} dir={dir} onChange={onChange} onClick={onClick}>
      {options.map((option: SelectOption) => (
        <option value={option.value} key={`${option.value}-${option.label}`}>{option.label}</option>
      ))}
    </select>
  )
};

export default Select;
