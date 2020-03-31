import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as H from 'history';
import { identifyTab } from '../utils/location';

const useInitScroll = (lastLocation?: H.Location<H.History.PoorMansUnknown>): void => {
  const currentLocation = useLocation();
  useLayoutEffect(() => {
    if (typeof lastLocation === 'undefined' || identifyTab(lastLocation) === identifyTab(currentLocation)) {
      window.scroll(0, 0);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export default useInitScroll;
