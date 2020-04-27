import React, { FC, MouseEvent, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import IconButton from '../../atoms/IconButton';
import styles from './style.module.scss';

export type InputProps = {
  value?: string;
  icon?: IconDefinition;
  placeholder?: string;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  initInput: (e: MouseEvent) => void;
}

const Input: FC<InputProps> = ({ value, icon, placeholder, className, onChange, initInput }) => {
  return (
    <div className={[styles.inputBox, className].join(' ')}>
      {
        icon &&
        <FontAwesomeIcon className={styles.icon} icon={icon}/>
      }
      <input
        type="text"
        value={value}
        className={[styles.input, icon && styles.withIcon].join(' ')}
        placeholder={placeholder}
        onChange={onChange}
      ></input>
      {
        value &&
        <IconButton
          icon={faTimesCircle}
          size="small"
          color="muteText"
          className={styles.clearButton}
          onClick={initInput}
        />
      }
    </div>
  );
};

export default Input;