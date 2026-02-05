import { useState, useMemo } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(40);

  return (
    <>
        <div className="flex">
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Increase
        </button>

        <input type="number" value={count} onInput={(e) => setCount(+e.target.value)}/>

        <button
          className="counter"
          onClick={() => setCount((count) => count - 1)}
          disabled={count === 1}
        >
          Reduce
        </button>


        </div>

        <Box count={count} key={count} />
    </>
  );
}

const Box = ({ count }: {count: number}) => {
  const items = useMemo(() => {
    return Array.from(Array(count).keys()).map((i) => {
      return <div className="item" key={`item-${i}`}></div>;
    });
  }, [count]);

  return <div className="box">{items}</div>;
};

export default App;
