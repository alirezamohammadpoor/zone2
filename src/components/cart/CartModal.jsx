import React from "react";
import "./CartModal.css";

const CartModal = ({ onClose }) => {
  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>Your Cart</h2>
        <div className="cart-items">{/* Cart items will go here */}</div>
      </div>
    </div>
  );
};

export default CartModal;
