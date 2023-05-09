import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, clearCartAlert, deleteProductById, total, navigate }) => {
  return (
    <div>
      <h1>Aca el carrito</h1>
      {cart.map((e) => {
        return (
          <div key={e.id} style={{ border: "2px solid black" }}>
            <h3>{e.title}</h3>
            <h4>{e.price}</h4>
            <h4>{e.quantity}</h4>
            <button onClick={() => deleteProductById(e.id)}>Eliminar</button>
          </div>
        );
      })}

      {cart.length > 0 ? (
        <div>
          <button onClick={() => navigate("/checkout")}>
            Terminar la compra
          </button>
          <button onClick={clearCartAlert}>Limpiar carrito{""}</button>
        </div>
      ) : (
        <Link to="/">
          <button>Agrega produtos</button>
        </Link>
      )}
      <h2>El total del carrito es {total}</h2>
    </div>
  );
};

export default Cart;
