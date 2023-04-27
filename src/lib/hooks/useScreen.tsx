import { useState, useEffect } from 'react';

interface ScreenDimensions {
  width: number;
  height: number;
}
const useScreen = (): ScreenDimensions => {
  const [screenDimensions, setScreenDimensions] = useState<ScreenDimensions>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenDimensions;
};

export default useScreen;
