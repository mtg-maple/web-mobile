import React, { FC, MouseEvent, useState, useEffect, useRef } from 'react';
import * as H from 'history';

import NavigationHeader from '../../organisms/NavigationHeader'
import DeckSummary from '../../organisms/DeckSummary';
import { IDeck } from '../../../store';
import styles from './style.module.scss';

export type DeckTemplateProps = {
  deck: IDeck;
  backButtonProps: {
    to: H.LocationDescriptor<H.History.PoorMansUnknown> | ((location: H.Location<H.History.PoorMansUnknown>) => H.LocationDescriptor<H.History.PoorMansUnknown>);
    onClick?: (e: MouseEvent) => void;
  };
}

const DeckTemplate: FC<DeckTemplateProps> = ({ deck, backButtonProps }) => {
  const [belowTopSection, setBelowTopSection] = useState(false);
  const anchorRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const scrollHandler = () => {
      if (anchorRef !== null && anchorRef.current !== null) {
        console.log(anchorRef.current.getBoundingClientRect().bottom);
        if (anchorRef.current.getBoundingClientRect().bottom > 0) {
          setBelowTopSection(false);
        } else {
          setBelowTopSection(true);
        }
      }
    }
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  return (
    <div className={styles.pageRoot}>
      <NavigationHeader
        className={styles.navigationHeader}
        title={deck.name}
        backButtonProps={backButtonProps}
        isSimple={belowTopSection}
      />
      <DeckSummary deck={deck} />
      <span style={{ visibility: 'hidden' }} ref={anchorRef}></span>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
    </div>
  )
};

export default DeckTemplate;
