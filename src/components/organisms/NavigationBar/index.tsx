import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  NavLink
} from 'react-router-dom';

import styles from './style.module.scss';

export type NavigationBarProps = {
  links: NavigationLink[];
  className?: string;
}

export type NavigationLink = {
  icon: IconDefinition;
  link: string;
}

const NavigationBar: FC<NavigationBarProps> = ({ links, className }) => {
  return (
    <ul className={[styles.navigationBar, className].join(' ')}>
      {
        links.map((props: NavigationLink) => (
          <li className={styles.navigationBarItem}>
            <NavLink to={props.link} className={styles.navigationBarLink} activeClassName={styles.active}>
              <FontAwesomeIcon icon={props.icon}/>
            </NavLink>
          </li>
        ))
      }
    </ul>
  );
}

export default NavigationBar;