import React, { ReactElement, useState } from 'react';
import { mount } from 'enzyme';

import Input from '../Input';

const Wrapper = (): ReactElement => {
  const [value, setValue] = useState('initial');
  return (
    <div>
      <span>{value}</span>
      <Input value={value} setValue={setValue}/>
    </div>
  );
}

describe('Input',() => {
  it('input event', () => {
    const wrapper = mount(<Wrapper/>);
    wrapper.find('input').getDOMNode<HTMLInputElement>().value = 'hello';
    wrapper.find('input').simulate('change');
    expect(wrapper.find('input').prop('value')).toEqual('hello');
    expect(wrapper.find('span').text()).toEqual('hello');
  });

  it('clear event', () => {
    const wrapper = mount(<Wrapper/>);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('input').prop('value')).toEqual('');
    expect(wrapper.find('span').text()).toEqual('');
  });
});