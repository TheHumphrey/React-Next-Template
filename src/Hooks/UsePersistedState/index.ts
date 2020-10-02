import { useState, useEffect, Dispatch, SetStateAction } from 'react';

import Cookies from 'universal-cookie';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const cookies = new Cookies();
  const [state, setState] = useState(() => {
    const theme = cookies.get(key);

    if (theme) {
      return theme;
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    cookies.set(key, state);
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
