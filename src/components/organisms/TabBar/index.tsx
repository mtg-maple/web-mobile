import React, { FC, Dispatch } from 'react';
import { useLocation } from 'react-router-dom';
import * as H from 'history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { NavLink } from 'react-router-dom';

import styles from './style.module.scss';
import { isTopPage, getTopPagePath, identifyTab, TabIdentifier } from '../../../utils/location';
import { IAction } from '../../../store';

export type TabBarProps = {
  links: NavigationLink[];
  className?: string;
  dispatch: Dispatch<IAction>;
}

export type NavigationLink = {
  tabIdentifier: TabIdentifier;
  icon: IconDefinition;
  lastLocation?: H.Location<H.History.PoorMansUnknown>;
};

const TabBar: FC<TabBarProps> = ({ links, className, dispatch }) => {
  let currentLocation = useLocation();

  const createOnClick = (tabIdentifier: TabIdentifier): () => void => {
    return () => {
      if (tabIdentifier === identifyTab(currentLocation) && isTopPage(tabIdentifier, currentLocation)) {
        // タブのトップページでそのタブがタップされたらスクロール位置をtopに移動
        window.scroll(0, 0);
      }
    };
  };

  const createTo = (
    tabIdentifier: TabIdentifier,
    lastLocation?: H.Location<H.History.PoorMansUnknown>,
  ): H.LocationDescriptor<H.History.PoorMansUnknown> | ((location: H.Location<H.History.PoorMansUnknown>) => H.LocationDescriptor<H.History.PoorMansUnknown>) => {
    if (tabIdentifier === identifyTab(currentLocation)) {
      if (isTopPage(tabIdentifier, currentLocation)) {
        // タブのトップページで現在のタブがタップされたら遷移しない
        return '#';
      } else {
        // タブのトップページ以外で現在のタブがタップされたらトップページに遷移する
        return getTopPagePath(tabIdentifier);
      }
    } else {
      // 現在のタブと異なるタブがタップされたら、そのタブで開いた最後のページに遷移する。履歴がない場合はそのタブのトップページに遷移する
      if (typeof lastLocation === 'undefined') {
        return getTopPagePath(tabIdentifier);
      } else {
        let params = new URLSearchParams(lastLocation.search);
        params.set('action', 'resume');
        return { ...lastLocation, search: params.toString() };
      }
    }
  };

  return (
    <ul className={[styles.tabBar, className].join(' ')}>
      {
        links.map((link: NavigationLink) => (
          <li className={styles.tabBarItem} key={link.tabIdentifier}>
            <NavLink
              to={createTo(link.tabIdentifier, link.lastLocation)}
              className={styles.tabBarLink}
              activeClassName={styles.active}
              onClick={createOnClick(link.tabIdentifier)}
            >
              <FontAwesomeIcon icon={link.icon}/>
            </NavLink>
          </li>
        ))
      }
    </ul>
  );
}

export default TabBar;
