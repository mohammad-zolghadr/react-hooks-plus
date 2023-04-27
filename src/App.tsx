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
import { setPrecisionForDecimal } from './lib/index';

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
  useConLog(isOnScreen, 'Visible on Screen : ');

  const handleClickOutside = () => {
    console.log('Clicked outside!');
  };

  useConGroup(data, 'My Group Label');

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

  useConLog(isMobile, 'MediaQuery is under 767px : ');

  const { x, y } = useScroll();
  useConLog(`X : ${x} - Y : ${y}`);

  const { width, height } = useScreen();
  useConLog(`Width : ${width} - Height : ${height}`);

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
