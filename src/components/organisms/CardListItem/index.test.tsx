import React from 'react';
import { mount } from 'enzyme';

import CardListItem from '../CardListItem';

describe('CardListItem',() => {
  it('click event', () => {
    const handleClick = jest.fn();
    const wrapper = mount(<CardListItem onClick={handleClick} card={{id: '', name: '', cost: '', count: 1, thumbnailImageUrl: ''}} />);
    wrapper.find('button').simulate('click');
    expect(handleClick.mock.calls.length).toEqual(1);
  });
});
