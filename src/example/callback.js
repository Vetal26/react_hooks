import { useCallback, useState } from "react";
import ItemsList from "./itemsList";

function App() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? "darkred" : "black",
  };

  const generateItemsFromAPI = useCallback(
    (indexNumber) => {
      return new Array(count)
        .fill("")
        .map((_, i) => `Element ${i + indexNumber}`);
    },
    [count]
  );

  return (
    <div className="App">
      <h1 style={styles}>Колтчество элементов: {count}</h1>
      <button
        className={"btn btn-success"}
        onClick={() => setCount((prev) => prev + 1)}
      >
        Добавить
      </button>
      <button
        className={"btn btn-warning"}
        onClick={() => setColored((prev) => !prev)}
      >
        Изменить
      </button>

      <ItemsList getItems={generateItemsFromAPI} />
    </div>
  );
}

export default App;
