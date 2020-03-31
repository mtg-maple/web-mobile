import React, { FC, MouseEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  NavLink
} from 'react-router-dom';

import styles from './style.module.scss';

export type TabBarProps = {
  links: NavigationLink[];
  className?: string;
}

export type NavigationLink = {
  icon: IconDefinition;
  link: string;
  onClick?: (e: MouseEvent) => void;
}

const TabBar: FC<TabBarProps> = ({ links, className }) => {
  return (
    <ul className={[styles.tabBar, className].join(' ')}>
      {
        links.map((props: NavigationLink) => (
          <li className={styles.tabBarItem} key={props.link}>
            <NavLink to={props.link} className={styles.tabBarLink} activeClassName={styles.active} onClick={props.onClick}>
              <FontAwesomeIcon icon={props.icon}/>
            </NavLink>
          </li>
        ))
      }
    </ul>
  );
}

export default TabBar;