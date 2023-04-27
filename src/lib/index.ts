// ================================ Functions =====================================
// =========== random
import {
  randomNumber,
  randomNumberDigit,
  randomNumberRange,
  randomNumberEven,
  randomString,
  randomStringLength,
  randomStringSymbols,
  randomStringSymbolsLength,
} from './funcs/funcRandom';
export {
  randomNumber,
  randomNumberDigit,
  randomNumberRange,
  randomNumberEven,
  randomString,
  randomStringLength,
  randomStringSymbols,
  randomStringSymbolsLength,
};
// =========== local storage
import {
  saveToLocalStorage,
  getFromLocalStorage,
} from './funcs/funcLocalStorage';
export { saveToLocalStorage, getFromLocalStorage };
// ========== decimal
import setPrecisionForDecimal from './funcs/funcDecimalNumber';
export { setPrecisionForDecimal };
// ========== Array
import {
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
} from './funcs/funcArray';
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

// ================================ Hooks =====================================
// =========== copy to clipboard
import useCopyToClipboard from './hooks/useCopyToClipboard';
export { useCopyToClipboard };
// =========== local storage
import useLocalStorage from './hooks/useLocalStorage';
export { useLocalStorage };
// =========== document title
import useDocTitle from './hooks/useDocTitle';
export { useDocTitle };
// =========== on click outside
import useOnClickOutside from './hooks/useOnClickOutside';
export { useOnClickOutside };
// =========== on hover
import useHover from './hooks/useHover';
export { useHover };
// =========== fetch
import useFetch from './hooks/useFetch';
export { useFetch };
// =========== console
import useConLog from './hooks/useConsole/useConLog';
import useConGroup from './hooks/useConsole/useConGroup';
import useConTable from './hooks/useConsole/useConTable';
import useConTime from './hooks/useConsole/useConTime';
export { useConLog, useConGroup, useConTable, useConTime };
// ========== media query
import useMedia from './hooks/useMedia';
export { useMedia };
// ========== scroll
import useScroll from './hooks/useScroll';
export { useScroll };
// ========== screen
import useScreen from './hooks/useScreen';
export { useScreen };
// ========== on screen
import useOnScreen from './hooks/useOnScreen';
export { useOnScreen };
