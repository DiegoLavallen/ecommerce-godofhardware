import "./CartWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

function CartWidget() {
  const { getTotalQuantity } = useContext(CartContext);

  let total = getTotalQuantity();
  return (
    <Link to="/Cart">
      <div style={{ fontSize: "40px", color: "white", cursor: "pointer" }}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span>{total}</span>
      </div>
    </Link>
  );
}

export default CartWidget;
