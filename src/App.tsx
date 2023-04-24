import { useRef } from 'react';

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

import { useCopyToClipboard } from './lib/index';
import { saveToLocalStorage, getFromLocalStorage } from './lib/index';

import { useLocalStorage } from './lib/index';

import { useDocTitle } from './lib/index';

import { useOnClickOutside } from './lib/index';

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

  useDocTitle('Changed By My Hook');

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
  };

  const myRef = useRef(null);

  const handleClickOutside = () => {
    console.log('Clicked outside!');
  };

  useOnClickOutside(myRef, handleClickOutside);
  return (
    <div style={styleContainer}>
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
      <div>
        <button
          onClick={() => copyToClipboard('Some text to copy to clipboard')}
        >
          Copy to clipboard
        </button>
        {copied && <p>Text copied to clipboard!</p>}
      </div>
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
    </div>
  );
}

export default App;
