import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as H from 'history';

export const extractTabIdentifier = (location: H.Location<H.History.PoorMansUnknown>): string => {
  return location.pathname.slice(0, location.pathname.indexOf('/', 1));;
};

const useInitScroll = (lastLocation?: H.Location<H.History.PoorMansUnknown>): void => {
  const currentLocation = useLocation();
  useLayoutEffect(() => {
    if (typeof lastLocation === 'undefined' || extractTabIdentifier(lastLocation) === extractTabIdentifier(currentLocation)) {
      window.scroll(0, 0);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export default useInitScroll;
