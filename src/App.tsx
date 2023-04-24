import {
  useRandomNumber,
  useRandomNumberDigit,
  useRandomNumberRange,
  useRandomNumberEven,
  useRandomString,
  useRandomStringLength,
  useRandomStringSymbols,
  useRandomStringSymbolsLength,
  useCopyToClipboard,
} from './lib/index';

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
              console.log(useRandomNumber());
            }}
          >
            Use Random Int
          </button>
          <button
            onClick={() => {
              console.log(useRandomNumberDigit(7));
            }}
          >
            Use Random Digit
          </button>
          <button
            onClick={() => {
              console.log(useRandomNumberRange(1, 100));
            }}
          >
            Use Random Range
          </button>
          <button
            onClick={() => {
              console.log(useRandomNumberEven(true, 1, 100));
            }}
          >
            Use Random Even
          </button>
          <button
            onClick={() => {
              console.log(useRandomString());
            }}
          >
            Use Random String
          </button>
          <button
            onClick={() => {
              console.log(useRandomStringLength(12));
            }}
          >
            Use Random String Range
          </button>
          <button
            onClick={() => {
              console.log(useRandomStringSymbols());
            }}
          >
            Use Random String Symbols
          </button>
          <button
            onClick={() => {
              console.log(useRandomStringSymbolsLength(12));
            }}
          >
            Use Random String Symbols Range
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
