import React from 'react';
import { mount } from 'enzyme';

import DeckListItem from '../DeckListItem';

describe('DeckListItem',() => {
  it('click event', () => {
    const handleClick = jest.fn();
    const wrapper = mount(<DeckListItem id="" name="" description="" thumbnailImageUrl="" colors={[]} onClick={handleClick}/>);
    wrapper.find('button').simulate('click');
    expect(handleClick.mock.calls.length).toEqual(1);
  });
});
