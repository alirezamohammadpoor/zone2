import "./CartPage.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
      </div>
    );
  }

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(itemId, newQuantity);
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 10;
  const vat = total * 0.25;

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-container">
          <div className="cart-item-image-container">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="cart-item-details">
            <h3>{item.name}</h3>
            <p>Size - US {item.size}</p>
          </div>
          <div className="quantity-selector">
            <p className="quantity-title">Quantity</p>
            <div className="quantity-controls">
              <button
                className="quantity-button"
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span className="quantity-value">{item.quantity}</span>
              <button
                className="quantity-button"
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <button
              className="remove-button"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="price-container">
        <div className="price-container-row">
          <p>Price</p>
          <p>Shipping</p>
          <p>Total</p>
          <p>Including 25% VAT </p>
        </div>
        <div className="filler"></div>
        <div className="price-container-row-2">
          <p>€{total.toFixed(2)}</p>
          <p>€{shipping.toFixed(2)}</p>
          <p>€{(total + shipping).toFixed(2)}</p>
          <p>€{vat.toFixed(2)}</p>
        </div>
      </div>
      <div className="cart-button-container">
        <button className="cart-button" onClick={() => navigate("/order")}>
          Go to checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;
