import "./ProductCard.css";
import { useState } from "react";
import Modal from "../modal/Modal";

const ProductCard = ({ image, title, price, sku }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="product-card" onClick={handleClick}>
        <img src={image} alt={title} />
        <p className="product-card-title">{title}</p>
        <p className="product-card-price">{price} €</p>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} productId={sku} />
    </>
  );
};

export default ProductCard;
