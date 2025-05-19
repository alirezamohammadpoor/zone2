import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartModal from "../modal/CartModal.jsx";
import "./NavBar.css";

function NavBar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useContext(CartContext);

  return (
    <nav>
      <Link to="/">Zone 2</Link>
      <Link to="/products">Products</Link>
      <button onClick={() => setIsCartOpen(true)}>Cart ({cart.length})</button>
      {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
    </nav>
  );
}

export default NavBar;
