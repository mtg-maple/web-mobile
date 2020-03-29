import React, { FC } from 'react';

import NavigationHeader from '../../organisms/NavigationHeader'
import { IDeck } from '../../../store';
import commonStyles from '../style.module.scss';

export type DeckTemplateProps = {
  deck: IDeck;
}

const DeckTemplate: FC<DeckTemplateProps> = ({ deck }) => (
    <>
      <section className={commonStyles.default}>
        <NavigationHeader title={deck.name}/>
      </section>
    </>
);

export default DeckTemplate;
