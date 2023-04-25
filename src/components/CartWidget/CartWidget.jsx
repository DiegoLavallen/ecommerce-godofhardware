import "./CartWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <Link to="/Cart">
      <div style={{ fontSize: "40px", color: "white", cursor: "pointer" }}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span>0</span>
      </div>
    </Link>
  );
}

export default CartWidget;
