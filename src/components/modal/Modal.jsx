import "./Modal.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductPage from "../../pages/ProductPage";

function Modal({ isOpen, onClose, productId }) {
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
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
          onOpenCart={() => {
            handleClose();
            navigate("/cart");
          }}
        />
      </div>
    </div>
  );
}

export default Modal;
