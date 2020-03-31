import { useLayoutEffect } from 'react';

const useRestoreScroll = (scrollPositionY: number): void => {
  useLayoutEffect(() => {
    window.scroll(0, scrollPositionY);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export default useRestoreScroll;
