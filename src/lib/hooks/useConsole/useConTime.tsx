import { useState, useEffect } from 'react';
import { setPrecisionForDecimal } from '../..';

type Time = {
  start: number;
  end: number;
};

const useConTime = (text: string = 'Time Taken: ') => {
  const [time, setTime] = useState<Time>({ start: 0, end: 0 });

  useEffect(() => {
    if (time.start !== null && time.end !== null) {
      const diff = time.end - time.start;
      console.log(`${text}${setPrecisionForDecimal(diff, 3)}ms`);
    }
  }, [time]);

  const startTimer = () => {
    setTime((prevTime) => ({ ...prevTime, start: performance.now() }));
  };

  const endTimer = () => {
    setTime((prevTime) => ({ ...prevTime, end: performance.now() }));
  };

  return { startConsole: startTimer, endConsole: endTimer };
};

export default useConTime;
