import React, { FC, ReactNode, ReactElement } from 'react';

import { containPresenter } from '../../../utils';
import styles from './style.module.scss';

export type HeadingLevel = '1' | '2' | '3' | '4' | '5' | '6';
export type HeadingTextColor = 'text' | 'muteText';

export type HeadingProps = {
  /**
   * Child node of h1/h2/h3 tag
   */
  children?: ReactNode;

  /**
   * Level of heading
   * 
   * ```
   * '1' | '2' | '3' | '4' | '5' | '6'
   * ```
   * 
   * @default '1'
   */
  level?: HeadingLevel;

  /**
   * Color of heading
   * 
   * ```
   * 'text' | 'muteText'
   * ```
   * @default 'text'
   */
  color?: HeadingTextColor;

  classNames?: string[];
}

export type HeadingPresenterProps = {
  children: ReactNode;
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color: HeadingTextColor;
  classNames: string[];
}

export const HeadingPresenter: FC<HeadingPresenterProps> = ({ children, tag, color, classNames }) => {
  const Tag = tag as keyof JSX.IntrinsicElements;
  const className = [styles.heading, styles[color], ...classNames].join(' ');
  return (
    <Tag className={className}>
      {children}
    </Tag>
  );
}

export const HeadingContainer = (presenter: FC<HeadingPresenterProps>, props: HeadingProps): ReactElement | null => {
  let tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  switch (props.level) {
    case '6':
      tag = 'h6';
      break;
    case '5':
      tag = 'h5';
      break;
    case '4':
      tag = 'h4';
      break;
    case '3':
      tag = 'h3';
      break;
    case '2':
      tag = 'h2';
      break;
    case '1':
    default:
      tag = 'h1';
  }
  const presenterProps: HeadingPresenterProps = {
    children: props.children,
    tag,
    color: props.color || 'text',
    classNames: props.classNames || [],
  }
  return presenter(presenterProps);
}

const Heading: FC<HeadingProps> = (props) => {
  return containPresenter<HeadingProps, HeadingPresenterProps>(HeadingContainer, HeadingPresenter)(props);
}

export default Heading;