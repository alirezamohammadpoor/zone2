import "./ProductPage.css";
import { useState, useEffect, useContext } from "react";
import { fetchProducts } from "../services/kicksService";
import { useParams, useNavigate } from "react-router-dom";
import AddToCartButton from "../components/buttons/AddToCartButton";
import { CartContext } from "../context/CartContext";

function ProductPage({ id: propId }) {
  const { id: routeId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const formatDescription = (text) => {
    return text.replace(/<br>/g, "");
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProducts(propId || routeId);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getProduct();
  }, [propId, routeId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product || !product.data || !product.data[0])
    return <div>Product not found</div>;

  const productData = product.data[0];
  const sizes = [
    5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
  ];

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    const cartItem = {
      id: `${productData.sku}-${selectedSize}`,
      name: productData.title,
      price: productData.min_price,
      size: selectedSize,
      image: productData.image,
      sku: productData.sku,
      quantity: quantity,
    };

    addToCart(cartItem);
    navigate("/cart");
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="image-container">
          <img src={productData.image} alt={productData.title} />
        </div>
        <div className="product-details">
          <p className="product-title">{productData.title}</p>
          <p className="price">{productData.min_price} €</p>

          <div className="size-selector">
            <p className="size-selector-title">Select Size</p>
            <div className="size-grid">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`size-button ${
                    selectedSize === size ? "selected" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="quantity-selector">
            <p className="quantity-title">Quantity</p>
            <div className="quantity-controls">
              <button
                onClick={() => handleQuantityChange(quantity - 1)}
                className="quantity-button"
              >
                -
              </button>
              <span className="quantity-value">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(quantity + 1)}
                className="quantity-button"
              >
                +
              </button>
            </div>
          </div>

          <AddToCartButton handleAddToCart={handleAddToCart} />
          <div className="product-description">
            <h3>Product Description</h3>
            <p className="description-text">
              {formatDescription(productData.description)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
