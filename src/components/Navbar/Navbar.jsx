import "./Navbar.css";
import logo from "../../Assets/logoKratos.png";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="navContainer">
      <img src={logo} alt="Este es el logo de la empresa" />
      <ul className="navLinks">
        <li>
          <a href="#">Componentes</a>
        </li>
        <li>
          <a href="#">Computadoras</a>
        </li>
        <li>
          <a href="#">Perifericos</a>
        </li>
      </ul>
      <a href="#">
        <button>CONTACTO</button>
      </a>

      <CartWidget />
    </nav>
  );
};

export default Navbar;
