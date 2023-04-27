function findMaxIndex(arr: number[]): number {
  let max = arr[0];
  let maxIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }
  return maxIndex;
}

function chunk<T>(arr: T[], chunkSize: number): T[][] {
  const chunkedArr = [];

  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    chunkedArr.push(chunk);
  }

  return chunkedArr;
}

function flattenArray<T>(arr: T[][]): T[] {
  return arr.reduce((acc, curr) => [...acc, ...curr], []);
}

function uniqueArray<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

function sortByProperty<T>(arr: T[], prop: keyof T): T[] {
  return arr.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));
}

function shuffleArray(arr: any[]): any[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function sum(array: number[]): number {
  return array.reduce((a, b) => a + b, 0);
}

function isArrayEmpty(arr: any[]): boolean {
  return arr.length === 0;
}

function getMaxElement(arr: number[]): number {
  return Math.max(...arr);
}

function getMinElement(arr: number[]): number {
  return Math.min(...arr);
}

function hasElement(arr: any[], elem: any): boolean {
  return arr.includes(elem);
}

function removeElement(arr: any[], elem: any): any[] {
  return arr.filter((item: any) => item !== elem);
}

function average(arr: number[]): number | undefined {
  if (arr.length === 0) {
    return undefined;
  }
  return sum(arr) / arr.length;
}

function addElementToArrayIfNotExist(arr: any[], element: any): any[] {
  if (!arr.includes(element)) {
    arr.push(element);
  }
  return arr;
}

function addObjectToArrayIfPropNotExist(
  arr: any[],
  obj: any,
  propToCheck: string
): any[] {
  if (!arr.some((x) => x[propToCheck] == obj[propToCheck])) {
    arr.push(obj);
  }
  return arr;
}

function sortArrayDesc(arr: any[]): any[] {
  return arr.sort((a, b) => b - a);
}

function sortArrayAsc(arr: any[]): any[] {
  return arr.sort((a, b) => a - b);
}

function removeDuplicatesByProperty<T>(arr: T[], property: keyof T): T[] {
  return arr.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t[property] === item[property])
  );
}

export {
  findMaxIndex,
  removeDuplicatesByProperty,
  removeElement,
  sortArrayAsc,
  sortByProperty,
  sortArrayDesc,
  addElementToArrayIfNotExist,
  addObjectToArrayIfPropNotExist,
  average,
  hasElement,
  getMaxElement,
  getMinElement,
  isArrayEmpty,
  shuffleArray,
  uniqueArray,
  flattenArray,
  chunk,
  sum,
};
