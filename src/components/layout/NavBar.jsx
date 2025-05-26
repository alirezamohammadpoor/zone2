import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./NavBar.css";

function NavBar() {
  const { cart } = useContext(CartContext);

  return (
    <nav>
      <Link to="/">Zone 2</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart ({cart.length})</Link>
    </nav>
  );
}

export default NavBar;
