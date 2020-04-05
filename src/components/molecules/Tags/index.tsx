import React, { FC } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Label from '../../atoms/Label';
import IconButton from '../../atoms/IconButton';
import styles from './style.module.scss';
import { ISearchTag } from '../../../models';

export type TagsProps = {
  tags: ISearchTag[];
  /* eslint-disable @typescript-eslint/no-explicit-any */
  setTags: (newTags: ISearchTag[]) => void;
  /* eslint-disable @typescript-eslint/no-explicit-any */
}

const Tags: FC<TagsProps> = ({ tags, setTags }) => {
  return (
    <ul className={styles.tagItemList}>
      {
        tags.map((tag: ISearchTag) => (
          <li className={styles.tagItem} key={tag.label}>
            <Label weight="bold" size="small">{tag.label}</Label>
            <IconButton color="text"
              icon={faTimes}
              onClick={(): void => {
                setTags(tags.filter((target: ISearchTag) => target.label !== tag.label));
              }}
            />
          </li>
        ))
      }
    </ul>
  );
};

export default Tags;