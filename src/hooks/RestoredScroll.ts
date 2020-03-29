
import { FC, ReactElement, useEffect, useLayoutEffect } from 'react';
import { IStore, IAction, setScrollPosition } from '../store';
import { useLocation, useHistory } from 'react-router-dom';

export type RestoredScrollProps = {
  store: IStore,
  dispatch: React.Dispatch<IAction>;
  tab: 'home' | 'search' | 'user';
  children: ReactElement;
}

const RestoredScroll: FC<RestoredScrollProps> = ({ store, dispatch, tab, children }) => {
  const history = useHistory();
  
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const unregister = history.listen(() => {
      const scrollPositionY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      dispatch(setScrollPosition(tab, scrollPositionY));
    });
    return (): void => {
      unregister();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useLayoutEffect(() => {
    window.scroll(0, store.tabs[tab].scrollPositionY);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return children;
}

export default RestoredScroll;