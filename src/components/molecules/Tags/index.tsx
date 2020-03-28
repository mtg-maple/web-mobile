import React, { FC } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Label from '../../atoms/Label';
import IconButton from '../../atoms/IconButton';
import styles from './style.module.scss';

export type TagsProps = {
  tags: Tag[];
  /* eslint-disable @typescript-eslint/no-explicit-any */
  setTags: (newTags: any[]) => void;
  /* eslint-disable @typescript-eslint/no-explicit-any */
}

export interface Tag {
  label: string;
}

const Tags: FC<TagsProps> = ({ tags, setTags }) => {
  return (
    <ul className={styles.tagItemList}>
      {
        tags.map((tag: Tag) => (
          <li className={styles.tagItem} key={tag.label}>
            <Label text={tag.label} weight="bold" size="small"/>
            <IconButton color="text"
              icon={faTimes}
              onClick={(): void => {
                setTags(tags.filter((target: Tag) => target.label !== tag.label));
              }}
            />
          </li>
        ))
      }
    </ul>
  );
};

export default Tags;