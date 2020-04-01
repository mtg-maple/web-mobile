import React, { FC, Dispatch, MouseEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { NavLink, useRouteMatch } from 'react-router-dom';

import styles from './style.module.scss';
import { TabIdentifier } from '../../../utils/location';
import { IAction } from '../../../store';

export type TabBarProps = {
  tabs: TabProps[];
  className?: string;
  dispatch: Dispatch<IAction>;
}

export type TabProps = {
  tabIdentifier: TabIdentifier;
  icon: IconDefinition;
  to: string;
  onClick?: (e: MouseEvent) => void;
};

const Tab: FC<TabProps> = ({ icon, to, onClick }) => {
  let match = useRouteMatch(to);
  return (
    <li className={styles.tabBarItem}>
      <NavLink
        to={to}
        className={styles.tabBarLink}
        activeClassName={styles.active}
        onClick={(e: MouseEvent) => {
          if (typeof onClick !== 'undefined') {
            onClick(e);
          }
          if (match) {
            window.scroll(0, 0);
          }
        }}
      >
        <FontAwesomeIcon icon={icon}/>
      </NavLink>
    </li>
  );
};

const TabBar: FC<TabBarProps> = ({ tabs, className }) => {
  return (
    <ul className={[styles.tabBar, className].join(' ')}>
      {
        tabs.map((props: TabProps) => <Tab {...props}/>)
      }
    </ul>
  );
}

export default TabBar;
