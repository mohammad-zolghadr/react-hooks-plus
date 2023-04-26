import { useState, useEffect } from 'react';

interface FetchState {
  data: any;
  isLoading: boolean;
  error: null | Error;
}

const initialState: FetchState = {
  data: null,
  isLoading: false,
  error: null,
};

interface FetchOptions {
  headers?: Headers;
}

const useFetch = <T = any,>(
  url: string,
  options?: FetchOptions
): FetchState => {
  const [state, setState] = useState<FetchState>(initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState({ data: null, isLoading: true, error: null });
        const response = await fetch(url, options);
        const data = await response.json();
        setState({ data, isLoading: false, error: null });
      } catch (error) {
        setState({ data: null, isLoading: false, error });
      }
    };

    fetchData();
  }, [url, options]);

  return state;
};

export default useFetch;
