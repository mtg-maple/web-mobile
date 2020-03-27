import React from 'react';
import { mount } from 'enzyme';

import DeckListItem from '../DeckListItem';

describe('DeckListItem',() => {
  it('click event', () => {
    const handleClick = jest.fn();
    const wrapper = mount(<DeckListItem id="" title="" description="" thumbnailImageUrl="" colors={[]} onClick={handleClick}/>);
    wrapper.find('a').simulate('click');
    expect(handleClick.mock.calls.length).toEqual(1);
  });
});