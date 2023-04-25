import { useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("No puede ser menor a 0");
    }
  };

  const reset = () => {
    setCounter(0);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};

export default useCounter;
