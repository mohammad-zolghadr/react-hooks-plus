import {
  useRandomNumber,
  useRandomNumberDigit,
  useRandomNumberRange,
  useRandomNumberEven,
  useRandomString,
  useRandomStringLength,
} from './lib/index';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px',
        height: '100vh',
      }}
    >
      <p>See Log For Result</p>
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
    </div>
  );
}

export default App;
