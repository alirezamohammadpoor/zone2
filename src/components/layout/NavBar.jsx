import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./NavBar.css";

function NavBar() {
  const { cart } = useContext(CartContext);

  return (
    <nav>
      <Link to="/">
        <span className="logo-text">Zone 2</span>
      </Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart ({cart.length})</Link>
    </nav>
  );
}

export default NavBar;
