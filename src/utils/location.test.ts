import { identifyTab, TabIdentifier } from './location';

describe('utils/location', (): void => {
  it('identifyTab 1', (): void => {
    const location = {
      key: '',
      pathname: '/home/decks',
      search: '',
      hash: '',
      state: null
    };
    expect(identifyTab(location)).toBe(TabIdentifier.Home);
  });
});

describe('utils/location', (): void => {
  it('identifyTab 2', (): void => {
    const location = {
      key: '',
      pathname: '/home',
      search: '',
      hash: '',
      state: null
    };
    expect(identifyTab(location)).toBe(TabIdentifier.Home);
  });
});

