import { Dispatch, useLayoutEffect } from 'react';
import { IPageStore } from '../models';
import { IAction } from '../store';

const useScrollRestoreOnMount = (store: IPageStore, dispatch: Dispatch<IAction>): void => {
  useLayoutEffect(() => {
    window.scroll(0, store.scrollPositionY);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export default useScrollRestoreOnMount;
