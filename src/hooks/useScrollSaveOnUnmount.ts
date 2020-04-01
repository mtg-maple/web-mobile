import { useEffect, Dispatch } from 'react';
import { useLocation } from 'react-router-dom';
import { IAction, setScrollPosition } from '../store';


const useScrollSaveOnUnmount = (dispatch: Dispatch<IAction>) => {
  const currentLocation = useLocation();
  useEffect(() => {
    return () => {
      // タブunmount前にそのタブでのスクロール位置を保存
      const scrollPositionY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      dispatch(setScrollPosition(currentLocation.pathname, scrollPositionY));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export default useScrollSaveOnUnmount;
