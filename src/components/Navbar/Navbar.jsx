import "./Navbar.css";
import logo from "../../Assets/logoKratos.png";
import CartWidget from "../CartWidget/CartWidget";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navContainer">
        <Link to="/">
          <img src={logo} alt="Este es el logo de la empresa" />
        </Link>
        <ul className="navLinks">
          <Link className="categoryLinks" to="/">
            Componentes
          </Link>
          <Link className="categoryLinks" to="category/Computadoras">
            Computadoras
          </Link>
          <Link className="categoryLinks" to="category/Perifericos">
            Perifericos
          </Link>

          <Link className="categoryLinks">CONTACTO</Link>
        </ul>
        <CartWidget />
      </nav>

      <Outlet />
    </div>
  );
};

export default Navbar;
