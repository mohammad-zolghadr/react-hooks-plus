import { useRandomInt } from './lib/index';

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
          console.log(useRandomInt());
        }}
      >
        Use Random Int
      </button>
    </div>
  );
}

export default App;
