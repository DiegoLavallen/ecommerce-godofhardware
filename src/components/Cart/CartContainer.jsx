import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../Context/CartContext";
import Swal from "sweetalert2";
import { clear } from "@testing-library/user-event/dist/clear";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();
  const navigate = useNavigate();

  const clearCartAlert = () => {
    Swal.fire({
      title: "Quieres eliminar el carrito",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Vaciar",
      denyButtonText: `No vaciar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Se limpio el carrito", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Sin cambios", "", "error");
      }
    });
  };
  return (
    <div>
      <Cart
        cart={cart}
        clearCartAlert={clearCartAlert}
        deleteProductById={deleteProductById}
        total={total}
        navigate={navigate}
      />
    </div>
  );
};

export default CartContainer;
