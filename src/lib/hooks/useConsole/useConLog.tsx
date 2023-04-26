import { useEffect } from 'react';

function useConLog(state: any, text: string = 'State changed: ') {
  useEffect(() => {
    console.log(text, state);
  }, [state]);
}

export default useConLog;
