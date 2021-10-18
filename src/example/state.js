import { useState } from "react";

function computeIniialCounter() {
  console.log("1");
  return Math.trunc(Math.random() * 20);
}

function App() {
  const [counter, setCounter] = useState(() => computeIniialCounter());

  const [state, setState] = useState({
    title: "Counter",
    date: Date.now(),
  });

  function increment() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  function updateTitle() {
    setState((prev) => {
      return {
        ...prev,
        title: "Updated Name",
      };
    });
  }

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={increment} className="btn btn-success">
        Increment
      </button>
      <button onClick={decrement} className="btn btn-danger">
        Decrement
      </button>
      <button onClick={updateTitle} className="btn btn-default">
        Rename
      </button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
