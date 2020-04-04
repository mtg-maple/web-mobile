import React from 'react';
import { mount } from 'enzyme';

import DeckSummary from '../DeckSummary';

describe('DeckSummary',() => {
  it('click event', () => {
    const handleClick = jest.fn();
    const wrapper = mount(
      <DeckSummary
        deck={{
          name: '青白コントロール',
          description: '青と白のコントロールデッキです。Magic Fest名古屋向けに調整中。勝率60%くらい。青と白のコントロールデッキです。Magic Fest名古屋向けに調整中。勝率60%くらい',
          thumbnailImageUrl: 'https://img.scryfall.com/cards/art_crop/front/c/2/c2089ec9-0665-448f-bfe9-d181de127814.jpg',
          colors: ['W', 'B'],
        }}
        onAddCardClick={handleClick}
      />
    );
    wrapper.find('button').simulate('click');
    expect(handleClick.mock.calls.length).toEqual(1);
  });
});
