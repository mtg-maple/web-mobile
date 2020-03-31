import { useEffect, Dispatch } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { IAction, setLastLocation } from '../store';

const useUpdateLocation = (path: string, dispatch: Dispatch<IAction>): void => {
  let history = useHistory();
  let location = useLocation();
  useEffect(() => {
    dispatch(setLastLocation(path, location));
    const unsubscribe = history.listen((location) => {
      if (location.pathname.startsWith(path)) {
        dispatch(setLastLocation(path, location));
      }
    });
    return () => unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useUpdateLocation;
