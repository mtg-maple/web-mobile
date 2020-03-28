import React from 'react';
import { shallow } from 'enzyme';

import CardImage from '../CardImage';

describe('CardImage',() => {
  it('click event', () => {
    const handleClick = jest.fn();
    const wrapper = shallow(<CardImage src="" alt="" onClick={handleClick}/>);
    wrapper.simulate('click');
    expect(handleClick.mock.calls.length).toBe(1);
  });
});