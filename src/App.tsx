import { useEffect, useRef } from 'react';

import {
  randomNumber,
  randomNumberDigit,
  randomNumberRange,
  randomNumberEven,
  randomString,
  randomStringLength,
  randomStringSymbols,
  randomStringSymbolsLength,
} from './lib/index';
import { saveToLocalStorage, getFromLocalStorage } from './lib/index';
import {
  convertToPersianNumber,
  separateNumbers,
  convertToEnglishNumber,
  isPersianNumber,
} from './lib/index';
import { setPrecisionForDecimal } from './lib/index';
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
} from './lib/index';

// Hooks
import { useCopyToClipboard } from './lib/index';
import { useLocalStorage } from './lib/index';
import { useDocTitle } from './lib/index';
import { useOnClickOutside } from './lib/index';
import { useHover } from './lib/index';
import { useFetch } from './lib/index';
import { useConLog } from './lib/index';
import { useConGroup } from './lib/index';
import { useConTable } from './lib/index';
import { useConTime } from './lib/index';
import { useMedia } from './lib/index';
import { useScroll } from './lib/index';
import { useScreen } from './lib/index';
import { useOnScreen } from './lib/index';

const styleFlex: {} = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
const styleFlexCol: {} = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};
const styleContainer: {} = {
  ...styleFlex,
  gap: '10px',
  height: '100vh',
};
const styleButtons: {} = {
  ...styleFlexCol,
  flexWrap: 'wrap',
  gap: '10px',
};

function App() {
  const { copied, copyToClipboard } = useCopyToClipboard();

  const [phoneNumber, setPhoneNumber] = useLocalStorage('phoneNumber', '');

  const { data, isLoading } = useFetch(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  useDocTitle('Changed By My Hook');

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
  };

  const myRef = useRef(null);

  const [hoverRef, isHovered] = useHover();

  const isOnScreen = useOnScreen(hoverRef);
  useConLog('Visible on Screen : ', isOnScreen);

  const handleClickOutside = () => {
    console.log('Clicked outside!');
  };

  useConGroup(data, 'My Group Label');

  const mNum = '۵,۲۲۶';
  useConLog(convertToEnglishNumber(mNum));
  const myNumber = convertToPersianNumber(7775226);
  useConLog(
    separateNumbers(myNumber),
    ' - is Persian Number ? ',
    isPersianNumber(myNumber)
  );

  useOnClickOutside(myRef, handleClickOutside);

  const { startConsole, endConsole } = useConTime('Data Loaded in : ');

  useEffect(() => {
    startConsole();
  }, []);

  const tableData = [
    { title: 'iPhone 14', price: '1999$' },
    { title: 'Xiaomi Redmi 9T', price: '549$' },
  ];
  useConTable(tableData, ['price', 'price']);

  useEffect(() => {
    data && endConsole();
    console.log(setPrecisionForDecimal(1275.5683535, 4));
  }, [data]);

  const isMobile = useMedia(['(max-width: 767px)'], [true], false);

  useConLog('MediaQuery is under 767px : ', isMobile);

  const { x, y } = useScroll();
  useConLog('X : ', x, ' - Y : ', y);

  const { width, height } = useScreen();
  useConLog('Width : ', width, ' - Height : ', height);

  // =============================================== Array Usage
  const arrayUsage = () => {
    const arr1 = [3, 7, 1, 9, 4];
    const maxIndex = findMaxIndex(arr1);
    console.log(
      `The largest element in arr1 is ${arr1[maxIndex]} at index ${maxIndex}.`
    );

    const arr = [1, 2, 3, 4, 5, 6];
    const chunkedArr = chunk(arr, 3); // returns [[1, 2, 3], [4, 5, 6]]
    console.log(chunkedArr);

    const arra = [[1, 2], [3, 4], [5]];
    const flattenedArr = flattenArray(arra); // [1, 2, 3, 4, 5]
    console.log(flattenedArr);

    const arras = [1, 2, 2, 3, 4, 4];
    const uniqueArr = uniqueArray(arras); // [1, 2, 3, 4]
    console.log(uniqueArr);

    const users: { name: string; age: number }[] = [
      { name: 'John', age: 25 },
      { name: 'Mary', age: 20 },
      { name: 'Adam', age: 30 },
    ];
    const sortedUsers = sortByProperty(users, 'age'); // [{ name: 'Mary', age: 20 }, { name: 'John', age: 25 }, { name: 'Adam', age: 30 }]
    console.log(sortedUsers);

    const myArray = [1, 2, 3, 4, 5, 6];
    const shuffledArray = shuffleArray(myArray);
    console.log(shuffledArray);

    const numbers = [1, 2, 3, 4, 5];
    const total = sum(numbers);
    console.log(`The sum is ${total}`); //output: 15

    const myArr = [4, 6, 8, 5];
    console.log(isArrayEmpty(myArr)); // false

    const mAr: number[] = [10, 5, 20, 15];
    console.log(getMaxElement(mAr)); // Output: 20
    console.log(getMinElement(mAr)); // Output: 5

    const fruits: string[] = ['apple', 'banana', 'orange'];
    console.log(hasElement(fruits, 'banana')); // Output: true

    let mNum: number[] = [10, 20, 30, 40];
    mNum = removeElement(mNum, 20);
    console.log(mNum); // Output: [10, 30, 40]

    const mArrr = [2, 4, 6, 8, 10];
    const avg = average(mArrr); // returns 6
    console.log(avg);

    let newArr = addElementToArrayIfNotExist(mArrr, 6);
    console.log(newArr);

    let newArray = addObjectToArrayIfPropNotExist(
      users,
      { name: 'John', age: 38 },
      'name'
    );
    console.log(newArray);

    let newArrrrr = sortArrayDesc(mArrr);
    console.log(newArrrrr);

    let newArrayaay = sortArrayAsc(myArray);
    console.log(newArrayaay);

    const people: {
      id: number;
      name: string;
      age: number;
    }[] = [
      { id: 1, name: 'John', age: 30 },
      { id: 2, name: 'Jane', age: 25 },
      { id: 3, name: 'John', age: 30 },
      { id: 4, name: 'Bob', age: 40 },
      { id: 5, name: 'Jane', age: 20 },
    ];

    const uniquePeople = removeDuplicatesByProperty(people, 'name');
    console.log(uniquePeople);
    /* Output:
  [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
    { id: 4, name: "Bob", age:40 }
  ];
  */
  };
  arrayUsage();

  return (
    <div style={styleContainer}>
      <div style={styleButtons}>
        <p style={{ color: isLoading ? '#888' : '#33ee33' }}>
          {isLoading ? 'Connecting to API' : 'Connected to API Check The Log'}
        </p>
      </div>
      <div style={styleButtons}>
        <p>See Log For Result</p>
        <div style={styleButtons}>
          <button
            onClick={() => {
              console.log(randomNumber());
            }}
          >
            Random Int
          </button>
          <button
            onClick={() => {
              console.log(randomNumberDigit(7));
            }}
          >
            Random Digit
          </button>
          <button
            onClick={() => {
              console.log(randomNumberRange(1, 100));
            }}
          >
            Random Range
          </button>
          <button
            onClick={() => {
              console.log(randomNumberEven(true, 1, 100));
            }}
          >
            Random Even
          </button>
          <button
            onClick={() => {
              console.log(randomString());
            }}
          >
            Random String
          </button>
          <button
            onClick={() => {
              console.log(randomStringLength(12));
            }}
          >
            Random String Range
          </button>
          <button
            onClick={() => {
              console.log(randomStringSymbols());
            }}
          >
            Random String Symbols
          </button>
          <button
            onClick={() => {
              console.log(randomStringSymbolsLength(12));
            }}
          >
            Random String Symbols Range
          </button>
        </div>
      </div>
      <div style={styleButtons}>
        <button
          onClick={() => copyToClipboard('Some text to copy to clipboard')}
        >
          Copy to clipboard
        </button>
        {copied && <p>Text copied to clipboard!</p>}
        <div></div>
        <div style={{ ...styleFlexCol, gap: '10px' }}>
          <button
            onClick={() => {
              saveToLocalStorage('MY-KEY', 'THEME-OFF');
              console.log(getFromLocalStorage('MY-KEY'));
            }}
          >
            Click To Save Data To Local Storage
          </button>
          <input
            type='tel'
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>
        <div
          style={{
            backgroundColor: '#343434',
            padding: '10px',
            color: '#aaa',
          }}
          ref={myRef}
        >
          Click outside this element and check the console!
        </div>
        <div
          style={{
            backgroundColor: '#343434',
            padding: '10px',
            color: '#aaa',
          }}
          ref={hoverRef}
        >
          {isHovered ? 'Is Hovered!' : 'Not Hovered!'}
        </div>
      </div>
    </div>
  );
}

export default App;
