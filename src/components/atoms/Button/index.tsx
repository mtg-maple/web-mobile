import React, { FC, ReactElement } from 'react';

import styles from './style.module.scss';

export interface ButtonProps extends ButtonInstanceProps {
  children: Element | ReactElement;
  type?: 'text' | 'icon';
}

export interface ButtonInstanceProps {
  onClick?: (e: React.MouseEvent) => void;
  contextualClass?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Button: FC<ButtonProps> = ({children, onClick, className, type = 'text', contextualClass = 'primary', size = 'medium'}) => {
  return (
  <button 
    className={[styles.button, styles[type], styles[contextualClass], styles[size], className].join(' ')} 
    onClick={onClick}
  >
    {children}
  </button>
  );
};

export default Button;
