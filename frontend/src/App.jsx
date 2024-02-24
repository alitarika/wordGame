import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <p className="px-14 py-2">{count}</p>
      <button className="px-4 py-1 bg-green-700 mx-2" onClick={handleIncrement}>
        +
      </button>
      <button className="px-4 py-1 bg-red-700 mx-2" onClick={handleDecrement}>
        -
      </button>
    </>
  );
}
