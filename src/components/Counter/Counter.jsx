const Counter = ({ sumar, restar, reiniciar, counter }) => {
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
