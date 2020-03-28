import React from 'react';
import { shallow } from 'enzyme';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import IconButton, { isIconDefinition, isIconButtonProps } from '../IconButton';

describe('IconButton',() => {
  it('click event', () => {
    const handleClick = jest.fn();
    const wrapper = shallow(<IconButton icon={faSearch} onClick={handleClick}/>);
    wrapper.simulate('click');
    expect(handleClick.mock.calls.length).toBe(1);
  });

  it('isIconDefinition', () => {
    expect(isIconDefinition(faSearch)).toBe(true);
  });

  it('isIconButtonProps(minimum)', () => {
    expect(isIconButtonProps({icon: faSearch})).toBe(true);
  });

  it('isIconButtonProps(maximum)', () => {
    expect(isIconButtonProps({
      icon: faSearch,
      size: 'medium',
      color: 'primary',
      className: 'foo',
      onClick: () => {},
    })).toBe(true);
  });

  it('isIconButtonProps(invalid)', () => {
    expect(isIconButtonProps({
      icon: faSearch,
      size: 'big',
    })).toBe(false);
  });
});