
import { FC, ReactElement, useEffect, useLayoutEffect } from 'react';
import { IStore, IAction, setScrollPosition } from '../store';
import { useRouteMatch, useHistory } from 'react-router-dom';

export type RestoredScrollProps = {
  store: IStore,
  dispatch: React.Dispatch<IAction>;
  children: ReactElement;
}

const RestoredScroll: FC<RestoredScrollProps> = ({ store, dispatch, children }) => {
  let history = useHistory();

  const { path } = useRouteMatch();

  useEffect(() => {
    const unregister = history.listen(() => {
      const scrollPositionY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      dispatch(setScrollPosition(path, scrollPositionY));
    });
    return (): void => {
      unregister();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  useLayoutEffect(() => {
    if (path.startsWith('/home')) {
      window.scroll(0, store.homeTab.scrollPositionY);
    } else if (path.startsWith('/search')) {
      window.scroll(0, store.searchTab.scrollPositionY);
    } else if (path.startsWith('/user')) {
      window.scroll(0, store.searchTab.scrollPositionY);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  return children;
}

export default RestoredScroll;