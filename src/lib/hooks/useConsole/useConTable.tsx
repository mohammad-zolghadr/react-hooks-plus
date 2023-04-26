import { useEffect } from 'react';

function useConTable(data: any[], columns: string[]) {
  useEffect(() => {
    console.table(data, columns);
  }, [data, columns]);
}

export default useConTable;
