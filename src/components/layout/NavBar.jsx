// Import necessary dependencies and context
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./NavBar.css";

// Navigation bar component with cart count
function NavBar() {
  // Get cart items from context
  const { cart } = useContext(CartContext);

  return (
    <nav>
      {/* Home link with logo */}
      <Link to="/">
        <span className="logo-text">Zone 2</span>
      </Link>
      {/* Products page link */}
      <Link to="/products">Products</Link>
      {/* Cart link with item count */}
      <Link to="/cart">Cart ({cart.length})</Link>
    </nav>
  );
}

export default NavBar;
