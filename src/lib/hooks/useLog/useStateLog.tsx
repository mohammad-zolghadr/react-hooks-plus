import { useEffect } from 'react';

function useLogState(state: any, text: string = 'State changed: ') {
  useEffect(() => {
    console.log(text, state);
  }, [state]);
}

export default useLogState;
