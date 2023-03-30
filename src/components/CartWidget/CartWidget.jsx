import "./CartWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  return (
    <div style={{ fontSize: "40px", color: "white", cursor: "pointer" }}>
      1<FontAwesomeIcon icon={faShoppingCart} />
    </div>
  );
}

export default CartWidget;
