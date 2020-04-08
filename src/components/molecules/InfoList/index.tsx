import React, { FC, ReactNode } from 'react';

import Label from 'src/components/atoms/Label';
import Description from 'src/components/atoms/Description';

import styles from './style.module.scss';

export type InfoListProps = {
  items: InfoListItem[];
};

export type InfoListItem = {
  label: string;
  descriptions: ReactNode[];
};

const InfoList: FC<InfoListProps> = ({ items }) => (
  <section className={styles.infoList}>
    {
      items.map((item: InfoListItem) => (
        <div className={styles.infoListItem}>
          <Label className={styles.label} size="small" color="muteText" weight="bold" key={item.label}>{item.label}</Label>
          {
            item.descriptions.map((el: ReactNode) => (
              <Description key={el!.toString()}>{el}</Description>
            ))
          }
        </div>
      ))
    }
  </section>
);

export default InfoList;
