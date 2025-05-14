import "./ProductPage.css";
import { useState, useEffect } from "react";
import { fetchProducts } from "../services/kicksService";

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log(products);

  return (
    <div>
      <div className="image-container">
        <img src={products.data[0].image} alt={products.data[0].title} />
      </div>
      <h3>{products.data[0].title}</h3>
      <p>{products.data[0].max_price} €</p>
      <div className="size-selector">
        <h3>Select Size</h3>
        <div className="size-grid">
          <button className="size-button">5</button>
          <button className="size-button">5.5</button>
          <button className="size-button">6</button>
          <button className="size-button">6.5</button>
          <button className="size-button">7</button>
          <button className="size-button">7.5</button>
          <button className="size-button">8</button>
          <button className="size-button">8.5</button>
          <button className="size-button">9</button>
          <button className="size-button">9.5</button>
          <button className="size-button">10</button>
          <button className="size-button">10.5</button>
          <button className="size-button">11</button>
          <button className="size-button">11.5</button>
          <button className="size-button">12</button>
        </div>
        <button>Add to Cart</button>
        <h3>Product Description</h3>
        <p>{products.data[0].description}</p>
      </div>
    </div>
  );
}

export default ProductPage;
