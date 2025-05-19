import "./AddToCartButton.css";

const AddToCartButton = ({ handleAddToCart }) => {
  return (
    <div className="add-to-cart-button-container">
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartButton;
