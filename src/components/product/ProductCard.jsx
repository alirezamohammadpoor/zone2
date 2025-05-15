import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ image, title, price }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${title}`);
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <img src={image} alt={title} />
      <p className="product-card-title">{title}</p>
      <p className="product-card-price">{price} €</p>
    </div>
  );
};

export default ProductCard;
