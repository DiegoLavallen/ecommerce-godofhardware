import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { products } from "../../productsMock";
import useCounter from "../../utils/hooks/useCounter";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { counter, increment, decrement, reset } = useCounter(0);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    let encontrado = products.find((prod) => prod.id === +id);
    setProduct(encontrado);
  }, [id]);

  return (
    <div>
      <ItemDetail product={product} />
      <h1>{counter}</h1>
      <button onClick={increment}>Sumar</button>
      <button onClick={decrement}>Restar</button>
      <button onClick={reset}>Borrar</button>
    </div>
  );
};

export default ItemDetailContainer;
