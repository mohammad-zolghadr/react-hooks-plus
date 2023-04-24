import {
  randomNumber,
  randomNumberDigit,
  randomNumberRange,
  randomNumberEven,
  randomString,
  randomStringLength,
  randomStringSymbols,
  randomStringSymbolsLength,
} from './lib/funcs/index';

import { useCopyToClipboard } from './lib/hooks/index';

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
    </div>
  );
}

export default App;
