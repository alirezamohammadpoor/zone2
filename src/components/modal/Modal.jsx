import "./Modal.css";
import React, { useState, useContext } from "react";
import ProductPage from "../../pages/ProductPage";
import { CartContext } from "../../context/CartContext";

function Modal({ isOpen, onClose, productId }) {
  const [isClosing, setIsClosing] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  if (!isOpen) return null;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  return (
    <div className={`modal ${isClosing ? "closing" : ""}`}>
      <div className="modal-content">
        <button className="close-button" onClick={handleClose}>
          Close
        </button>
        <ProductPage
          id={productId}
          onClose={handleClose}
          onOpenCart={handleOpenCart}
        />
      </div>
    </div>
  );
}

export default Modal;
