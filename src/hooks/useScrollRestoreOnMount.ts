import { Dispatch, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IAction, setScrollPosition, IPageStore } from '../store';

const useScrollRestoreOnMount = (store: IPageStore, dispatch: Dispatch<IAction>): void => {
  const currentLocation = useLocation();
  useLayoutEffect(() => {
    const params = new URLSearchParams(currentLocation.search);
    if (params.get('action') !== 'resume' && params.get('action') !== 'back') {
      window.scroll(0, 0);
      dispatch(setScrollPosition(currentLocation, 0));
    } else {
      window.scroll(0, store.scrollPositionY);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export default useScrollRestoreOnMount;
