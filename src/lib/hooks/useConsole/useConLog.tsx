import { useEffect } from 'react';

function useConLog(...inputs: any[]) {
  useEffect(() => {
    console.log(...inputs);
  }, [inputs]);
}

export default useConLog;
