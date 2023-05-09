import React from "react";
import CounterContainer from "../Counter/CounterContainer";

export const ItemDetail = ({ product, onAdd, initial, cantidadTotal }) => {
  return (
    <div>
      <img src={product.img} alt="imegen del producto" />
      <h2>{product.title}</h2>
      <h2>{product.description}</h2>
      <h3>{product.price}</h3>
      <div>
        <CounterContainer
          stock={product.stock}
          onAdd={onAdd}
          initial={cantidadTotal}
        />
      </div>
    </div>
  );
};
