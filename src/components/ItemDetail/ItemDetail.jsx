import React from "react";

export const ItemDetail = ({ product }) => {
  return (
    <div>
      <img src={product.img} alt="imegen del producto" />
      <h2>{product.title}</h2>
      <h2>{product.description}</h2>
      <h3>{product.price}</h3>
    </div>
  );
};
