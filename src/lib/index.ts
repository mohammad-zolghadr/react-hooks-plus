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
