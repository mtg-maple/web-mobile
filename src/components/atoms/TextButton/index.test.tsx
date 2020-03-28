import React from 'react';
import { shallow } from 'enzyme';

import TextButton from '../TextButton';

describe('TextButton',() => {
  it('click event', () => {
    const handleClick = jest.fn();
    const wrapper = shallow(<TextButton label="" onClick={handleClick}/>);
    wrapper.simulate('click');
    expect(handleClick.mock.calls.length).toBe(1);
  });
});