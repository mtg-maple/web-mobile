import React from 'react';
import { shallow } from 'enzyme';

import CardListItemLayout from '../CardListItemLayout';

describe('CardListItemLayout',() => {
  it('click event', () => {
    const handleClick = jest.fn();
    const cardImageProps = {
      src: 'https://img.scryfall.com/cards/art_crop/front/c/2/c2089ec9-0665-448f-bfe9-d181de127814.jpg',
      alt: 'brazen borrower',
      size: 'thumbnail' as 'thumbnail',
    };
    const info = (
      <>
        <span>Brazen Borrower</span>
        <span>Description</span>
      </>
    );
    const onClick = handleClick;
    const showMoreIcon = true;
    const wrapper = shallow(<CardListItemLayout { ...{cardImageProps, info, onClick, showMoreIcon} }/>);
    wrapper.find('button').simulate('click');
    expect(handleClick.mock.calls.length).toBe(1);
  });
});