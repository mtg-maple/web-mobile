import React, { FC } from 'react';
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
  setValue: (newValue: string) => void;
}

const Input: FC<InputProps> = ({ value, icon, placeholder, className, setValue }) => {
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
        onChange={(e: React.FormEvent<HTMLInputElement>): void => {
          setValue(e.currentTarget.value);
        }}
      ></input>
      {
        value &&
        <IconButton
          icon={faTimesCircle}
          size="small"
          color="muteText"
          className={styles.clearButton}
          onClick={(): void => {
            setValue('');
          }}
        />
      }
    </div>
  );
};

export default Input;