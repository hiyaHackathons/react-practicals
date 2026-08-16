import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <div className="counter-card">
      <div className="counter-icon">🔢</div>

      <h2>Counter Application</h2>

      <div className="count-box">
        <p>Current Count</p>
        <h1>{count}</h1>
      </div>

      <div className="buttons">
        <button className="decrease" onClick={decrement}>
          -
        </button>

        <button className="reset" onClick={reset}>
          Reset
        </button>

        <button className="increase" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;