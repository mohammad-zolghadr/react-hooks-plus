import { useState, useEffect, useRef } from 'react';

function useHover(): [React.MutableRefObject<any>, boolean] {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<any>(null);

  function handleMouseOver() {
    setIsHovered(true);
  }

  function handleMouseOut() {
    setIsHovered(false);
  }

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);

      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, [ref.current]);

  return [ref, isHovered];
}

export default useHover;
