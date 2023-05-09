const Counter = ({ sumar, restar, reiniciar, counter, onAdd }) => {
  return (
    <div>
      <button onClick={sumar}>sumar</button>
      <h3>{counter}</h3>
      <button onClick={restar}>Restar</button>
      <button onClick={reiniciar}>Reiniciar</button>
      <button onClick={() => onAdd(counter)}>Agregar</button>
    </div>
  );
};

export default Counter;
