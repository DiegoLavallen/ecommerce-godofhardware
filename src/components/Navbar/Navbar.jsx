import "./Navbar.css";
import logo from "../../Assets/logoKratos.png";
import CartWidget from "../CartWidget/CartWidget";
import { Outlet, Link } from "react-router-dom";
import { db } from "../../FirebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesCollection = collection(db, "categories");
    getDocs(categoriesCollection)
      .then((res) => {
        let categoriesResult = res.docs.map((category) => {
          return {
            ...category.data(),
            id: category.id,
          };
        });
        setCategories(categoriesResult);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <nav className="navContainer">
        <Link to="/">
          <img src={logo} alt="Este es el logo de la empresa" />
        </Link>
        {categories.map((category) => {
          return (
            <Link key={category.id} to={category.path}>
              {category.title}
            </Link>
          );
        })}
        <CartWidget />
      </nav>

      <Outlet />
    </div>
  );
};

export default Navbar;
