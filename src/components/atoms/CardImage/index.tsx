import React, { FC } from 'react';

import styles from './style.module.scss';

export type CardImageProps = {
  /**
   * Image source of the image
   */
  src: string;

  /**
   * Alternative text of the image
   */
  alt: string;
  /**
   * Size of the image
   * @default 'thumbnail'
   */
  size?: 'thumbnail' | 'deckThumbnail' | 'cover' | 'preview';

  onClick?: (e: React.MouseEvent) => void;

  linkUrl?: string;

  className?: string;
}

const CardImage: FC<CardImageProps> = ({ src, alt, size = 'thumbnail', onClick, linkUrl = '#', className }) => {
  type ImageProps = {
    innerClassName?: string;
  }
  const Image: FC<ImageProps> = ({ innerClassName = '' }) => <img className={[styles.cardImage, styles[size], innerClassName].join(' ')} src={src} alt={alt}/>;
  return (
    onClick || linkUrl !== '#' ? <a className={className} href={linkUrl} onClick={onClick}><Image/></a> : <Image innerClassName={className}/>
  );
};

export default CardImage;