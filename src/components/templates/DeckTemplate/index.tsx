import React, { FC } from 'react';

import NavigationHeader from '../../organisms/NavigationHeader'
import { IDeck } from '../../../store';

export type DeckTemplateProps = {
  deck: IDeck;
  pathBackward: string;
}

const DeckTemplate: FC<DeckTemplateProps> = ({ deck, pathBackward }) => (
    <>
      <NavigationHeader title={deck.name} pathBackward={pathBackward}/>
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
      <p>lorem ipsum</p>
    </>
);

export default DeckTemplate;
