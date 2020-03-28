import React from 'react';
import { shallow } from 'enzyme';

import UserIcon from '../UserIcon';

describe('UserIcon',() => {
  it('click event', () => {
    const handleClick = jest.fn();
    const wrapper = shallow(<UserIcon alt="" onClick={handleClick}/>);
    wrapper.simulate('click');
    expect(handleClick.mock.calls.length).toBe(1);
  });
});