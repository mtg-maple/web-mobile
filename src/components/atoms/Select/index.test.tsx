import React from 'react';
import { shallow } from 'enzyme';

import Select, { isSelectOption, isSelectProps } from '../Select';

describe('Select',() => {
  it('click event', () => {
    const handleClick = jest.fn();
    const wrapper = shallow(<Select options={[]} onClick={handleClick}/>);
    wrapper.simulate('click');
    expect(handleClick.mock.calls.length).toBe(1);
  });

  it('change event', () => {
    const handleChange = jest.fn();
    const wrapper = shallow(<Select options={[]} onChange={handleChange}/>);
    wrapper.simulate('change');
    expect(handleChange.mock.calls.length).toBe(1);
  });

  it('isSelectOption(empty object)', () => {
    expect(isSelectOption({})).toBe(false);
  });

  it('isSelectOption(invalid object)', () => {
    expect(isSelectOption({ foo: 'bar' })).toBe(false);
  });

  it('isSelectOption(valid object)', () => {
    expect(isSelectOption({ label: 'foo', value: 'bar' })).toBe(true);
  });

  it('isSelectProps(empty object)', () => {
    expect(isSelectProps({})).toBe(false);
  });

  it('isSelectProps(null)', () => {
    expect(isSelectProps(null)).toBe(false);
  });

  it('isSelectProps(options is string)', () => {
    expect(isSelectProps({ options: 'foo' })).toBe(false);
  });

  it('isSelectProps(options is array of invalid object)', () => {
    expect(isSelectProps({ options: [{ foo: 'bar' }] })).toBe(false);
  });

  it('isSelectProps(options is valid)', () => {
    expect(isSelectProps({ options: [{ label: 'foo', value: 'bar' }] })).toBe(true);
  });

  it('isSelectProps(dir is invalid string)', () => {
    expect(isSelectProps({ options: [], dir: 'foo' })).toBe(false);
  });

  it('isSelectProps(dir is valid string)', () => {
    expect(isSelectProps({ options: [], dir: 'rtl' })).toBe(true);
  });
});