import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const sumar = () => {
    setCounter(counter + 1);
  };

  const restar = () => {
    setCounter(counter - 1);
  };

  const reiniciar = () => {
    setCounter(0);
  };

  return (
    <div>
      <h1>este es el contador</h1>
      <button onClick={sumar}>sumar</button>
      <h3>{counter}</h3>
      <button onClick={restar}>Restar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
};

export default Counter;
