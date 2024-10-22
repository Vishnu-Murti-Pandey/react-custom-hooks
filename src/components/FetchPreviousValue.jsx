import React, { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

const FetchPreviousValue = () => {
  const [count, setCount] = useState(0);

  const preValue = usePrevious(count);

  const handleCount = () => {
    setCount(count + 1);
  }

  return (
    <>
      <div>Previous Value: {preValue}</div>
      <div>Current Value: {count}</div>
      <button onClick={() => handleCount()}>Click</button>
    </>
  );
};

export default FetchPreviousValue;
