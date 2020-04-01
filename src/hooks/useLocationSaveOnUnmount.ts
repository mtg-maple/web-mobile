import { useEffect, Dispatch } from 'react';
import { useLocation } from 'react-router-dom';

import { IAction, setLastLocation } from '../store';

const useLocationSaveOnUnmount = (dispatch: Dispatch<IAction>) => {
  const currentLocation = useLocation();
  useEffect(() => {
    return (): void => {
      dispatch(setLastLocation(currentLocation));
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useLocationSaveOnUnmount;
