import { useEffect } from 'react';

const useConGroup = (
  content: any,
  groupLabel: string = 'My Console Group'
): void => {
  useEffect(() => {
    console.groupCollapsed(groupLabel);
    console.log(content);
    console.groupEnd();
  }, [groupLabel, content]);
};

export default useConGroup;
