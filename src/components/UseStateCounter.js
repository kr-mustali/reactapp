import React, { useState } from "react";

export default function UseStateCounter() {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div className="block" style={{ textAlign: "center", marginTop: "20px" }}>
      <button
        onClick={decrementCount}
        style={{ minHeight: "50px", minWidth: "50px" }}
      >
        -
      </button>
      <span
        style={{
          fontSize: "30px",
          padding: "10px 10px",
        }}
      >
        {count}
      </span>
      <button
        onClick={incrementCount}
        style={{ minHeight: "50px", minWidth: "50px" }}
      >
        +
      </button>
    </div>
  );
}
