import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartModal.css";

const CartModal = ({ onClose }) => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  console.log(cart);
  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>Your Cart</h2>
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          {cart.length > 0 ? (
            <>
              <div className="cart-total">
                <p>Total: ${total}</p>
              </div>
              <button className="checkout-button">Checkout</button>
            </>
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
