import { useState, useEffect } from 'react';

interface PositionState {
  x: number;
  y: number;
}

const useScroll = (): PositionState => {
  const [position, setPosition] = useState<PositionState>({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = (): void => {
      setPosition({ x: window.scrollX, y: window.scrollY });
    };

    document.addEventListener('scroll', handleScroll);

    return (): void => document.removeEventListener('scroll', handleScroll);
  }, []);

  return position;
};

export default useScroll;
