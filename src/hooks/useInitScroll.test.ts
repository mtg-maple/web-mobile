import { extractTabIdentifier } from './useInitScroll';

describe('useInitScroll', (): void => {
  it('extractTabIdentifier', (): void => {
    const location = {
      key: '',
      pathname: '/home/decks',
      search: '',
      hash: '',
      state: null
    };
    expect(extractTabIdentifier(location)).toBe('/home');
  });
});
