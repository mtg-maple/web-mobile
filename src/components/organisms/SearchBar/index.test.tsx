import React, { useState, FC } from 'react';
import { mount } from 'enzyme';

import SearchBar from '../SearchBar';
import { ISearchTag } from '../../../store';

type WrapperProps = {
  onClick: (e: React.MouseEvent) => void;
}
const Wrapper: FC<WrapperProps> = ({ onClick }) => {
  const queryState = useState('');
  const tagsState = useState([
    { label: 'Apple', value: 'APL' },
    { label: 'Banana', value: 'BNN' },
    { label: 'Calforina', value: 'CAR' },
  ]);
  return (
    <div>
      <span>{tagsState[0].map((tag: ISearchTag) => tag.label).join(',')}</span>
    <SearchBar query={queryState[0]} setQuery={queryState[1]} tags={tagsState[0]} setTags={tagsState[1]} onClick={onClick}/>
    </div>
  );
}

describe('SearchBar',() => {
  it('setting click event', () => {
    const handleClick = jest.fn();
    const wrapper = mount(<Wrapper onClick={handleClick}/>);
    wrapper.find('.settingButton').find('button').simulate('click');
    expect(handleClick.mock.calls.length).toEqual(1);
  });
});

describe('Tags',() => {
  it('close event', () => {
    const handleClick = (e: React.MouseEvent) => {};
    const wrapper = mount(<Wrapper onClick={handleClick}/>);
    wrapper.find('.tags').find('li').last().find('button').simulate('click');
    expect(wrapper.find('span').first().text()).toEqual('Apple,Banana');
  });
});
