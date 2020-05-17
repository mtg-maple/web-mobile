import React, { FC, MouseEvent, useState, useEffect, useRef } from 'react';
import * as H from 'history';
import { Tab, Tabs, TabList, TabPanel } from '../../organisms/Tabs';

import Heading from '../../atoms/Heading';
import NavigationHeader from '../../organisms/NavigationHeader'
import DeckSummary from '../../organisms/DeckSummary';
import CardList from '../../organisms/CardList';
import { IDeck, IDeckCard } from '../../../models';
import styles from './style.module.scss';

export type DeckTemplateProps = {
  deck?: IDeck;
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
      {
        typeof deck === 'undefined' ? 
          'loading...' :
          <>
            <NavigationHeader
              className={styles.navigationHeader}
              title={deck.name}
              backButtonProps={backButtonProps}
              isSimple={!belowTopSection}
            />
            <DeckSummary deck={deck} />
            <span style={{ visibility: 'hidden' }} ref={anchorRef}></span>
            <Tabs>
              <TabList>
                <Tab>カード</Tab>
                <Tab>メモ</Tab>
              </TabList>

              <TabPanel className={styles.tabPanel}>
                {
                  typeof deck.versionDetail?.mainboard === 'undefined' || typeof deck.versionDetail?.sideboard === 'undefined' ? 
                  'loading...' :
                  <>
                    <section>
                      <Heading className={styles.heading} level="3">{`メインボード(${deck.versionDetail.mainboard.length})`}</Heading>
                      <CardList 
                        cards={deck.versionDetail.mainboard}
                        onClicks={
                          deck.versionDetail.mainboard.map((card: IDeckCard) => () => alert(`${card.name} clicked`))
                        }
                      />
                    </section>
                    <section>            
                      <Heading className={styles.heading} level="3">{`サイドボード(${deck.versionDetail.sideboard.length})`}</Heading>
                      <CardList 
                        cards={deck.versionDetail?.sideboard}
                        onClicks={
                          deck.versionDetail.sideboard.map((card: IDeckCard) => () => alert(`${card.name} clicked`))
                        }
                      />
                    </section>
                  </>
                }
              </TabPanel>
              <TabPanel>
                <h2>Any content 3</h2>
              </TabPanel>
            </Tabs>
          </>
      }
    </div>
  )
};

export default DeckTemplate;
