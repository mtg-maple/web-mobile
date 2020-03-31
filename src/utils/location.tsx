import * as H from 'history';

export enum TabIdentifier {
  Home = '/home',
  Search = '/search',
  User = '/user,'
}

export const getTopPagePath = (tabIdentifier: TabIdentifier): string => {
  switch (tabIdentifier) {
    case TabIdentifier.Home:
      return '/home';
    case TabIdentifier.Search:
      return '/search';
    case TabIdentifier.User:
      return '/user';
    default:
      return '/';
  }
};

export const isTopPage = (tabIdentifier: TabIdentifier, location: H.Location<H.History.PoorMansUnknown>): boolean => {
  return getTopPagePath(tabIdentifier) === location.pathname;
};

export const identifyTab = (location: H.Location<H.History.PoorMansUnknown>): TabIdentifier | null => {
  const slashIndex = location.pathname.indexOf('/', 1);
  const identifierStr = slashIndex >= 1 ? location.pathname.slice(0, slashIndex) : location.pathname;
  switch (identifierStr) {
    case TabIdentifier.Home as string:
      return TabIdentifier.Home;
    case TabIdentifier.Search as string:
      return TabIdentifier.Search;
    case TabIdentifier.User as string:
      return TabIdentifier.User;
    default:
      return null;
  }
};

