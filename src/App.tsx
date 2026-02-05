import { useState, useMemo } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(40);

  return (
    <>
      <section id="center">
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

        <Box count={count} />
      </section>
    </>
  );
}

const Box = ({ count }) => {
  const items = useMemo(() => {
    return Array.from(Array(count).keys()).map((i) => {
      return <div className="item" key={`item-${i}`}></div>;
    });
  }, [count]);

  return <div className="box">{items}</div>;
};

export default App;
