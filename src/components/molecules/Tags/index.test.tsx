import React, { ReactElement, useState } from 'react';
import { mount } from 'enzyme';

import Tags, { Tag } from '../Tags';

const Wrapper = (): ReactElement => {
  const [tags, setTags] = useState([
    { label: 'Apple', value: 'APL' },
    { label: 'Banana', value: 'BNN' },
    { label: 'Calforina', value: 'CAR' },
  ]);
  return (
    <div>
      <span>{tags.map((tag: Tag) => tag.label).join(',')}</span>
      <Tags tags={tags} setTags={setTags}/>
    </div>
  );
}

describe('Tags',() => {
  it('close event', () => {
    const wrapper = mount(<Wrapper/>);
    wrapper.find('li').last().find('button').simulate('click');
    expect(wrapper.find('span').first().text()).toEqual('Apple,Banana');
  });
});