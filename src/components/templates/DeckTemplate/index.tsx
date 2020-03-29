import React, { FC } from 'react';

import NavigationHeader from '../../organisms/NavigationHeader'
import { IDeck } from '../../../store';

export type DeckTemplateProps = {
  deck: IDeck;
}

const DeckTemplate: FC<DeckTemplateProps> = ({ deck }) => (
    <>
      <NavigationHeader title={deck.name}/>
    </>
);

export default DeckTemplate;
