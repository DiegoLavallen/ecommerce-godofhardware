import { useEffect, useState } from "react";
import Counter from "./Counter.jsx";
import Swal from "sweetalert2";

const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
  const [counter, setCounter] = useState(initial);

  useEffect(() => {
    setCounter(initial);
  }, [initial]);

  const sumar = () => {
    counter < stock
      ? setCounter(counter + 1)
      : Swal.fire({
          icon: "error",
          title: "Lo sentimos...",
          text: "Producto sin stock",
          footer: '<a href="/">Volver al inicio</a>',
        });
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
