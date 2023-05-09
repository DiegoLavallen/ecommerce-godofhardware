import { useEffect, useState } from "react";
import Counter from "./Counter.jsx";

const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
  const [counter, setCounter] = useState(initial);

  useEffect(() => {
    setCounter(initial);
  }, [initial]);

  const sumar = () => {
    counter < stock ? setCounter(counter + 1) : alert("Stock maximo");
  };

  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const reiniciar = () => {
    setCounter(0);
  };
  return (
    <div>
      <Counter
        sumar={sumar}
        restar={restar}
        reiniciar={reiniciar}
        counter={counter}
        onAdd={onAdd}
      />
    </div>
  );
};

export default CounterContainer;
