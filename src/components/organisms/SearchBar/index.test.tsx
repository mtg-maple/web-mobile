import React, { ReactElement, useState, FC } from 'react';
import { mount } from 'enzyme';

import { Tag } from '@mtg-maple/web-components';

import SearchBar from '../SearchBar';

type WrapperProps = {
  onClick: (e: React.MouseEvent) => void;
}
const Wrapper: FC<WrapperProps> = ({ onClick }) => {
  const [query, setQuery] = useState('');
  const [tags, setTags] = useState([
    { label: 'Apple', value: 'APL' },
    { label: 'Banana', value: 'BNN' },
    { label: 'Calforina', value: 'CAR' },
  ]);
  return (
    <div>
      <span>{tags.map((tag: Tag) => tag.label).join(',')}</span>
    <SearchBar query={query} setQuery={setQuery} tags={tags} setTags={setTags} onClick={onClick}/>
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
