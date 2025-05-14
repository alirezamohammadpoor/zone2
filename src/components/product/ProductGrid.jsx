import "./ProductGrid.css";
import { useState, useEffect } from "react";
import { fetchMultipleProducts } from "../../services/kicksService";

function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [isRaceFilter, setIsRaceFilter] = useState(false);

  const asicsSKUs = [
    "1013A142-100",
    "1011B974-400",
    "1013A123-401",
    "1013A123-400",
  ];
  const nikeSKUs = ["HF6413-100", "HF7357-900", "DR2615-100", "HM6803-103"];
  const adidasSKUs = ["JR6365", "JH6206"];

  const raceSKUs = ["HF7357-900", "JR6365", "1013A123-401", "1013A123-400"];

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchMultipleProducts(
          asicsSKUs,
          nikeSKUs,
          adidasSKUs
        );
        setProducts(data);
        setLoading(false);
        console.log("Data from API:", data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log("Products state:", products);

  return (
    <div className="product-grid">
      <h1>All our products</h1>
      <p className="product-grid-description">
        Since day one, we've focused on building a curated collection of running
        shoes – each pair crafted for a specific purpose. From lightning-fast
        race day shoes to cushioned trainers for easy miles, and precision-tuned
        options for intervals, our lineup is designed to support every stride.
        Made to last, continuously refined.
      </p>
      <h2>Brands</h2>
      <div className="product-grid-filter">
        <button onClick={() => setSelectedBrand("all")}>All</button>
        <button onClick={() => setSelectedBrand("asics")}>Asics</button>
        <button onClick={() => setSelectedBrand("nike")}>Nike</button>
        <button onClick={() => setSelectedBrand("adidas")}>Adidas</button>
        <button onClick={() => setIsRaceFilter(!isRaceFilter)}>
          {isRaceFilter ? "All Shoes" : "Race Shoes"}
        </button>
        <button
          onClick={() => {
            setSelectedBrand("all");
            setIsRaceFilter(false);
          }}
        >
          Clear Filters
        </button>
      </div>

      {(selectedBrand === "asics" || selectedBrand === "all") && (
        <>
          <h2>Asics</h2>
          <div className="asics-product-grid-container">
            {products.asicsProducts
              .filter(
                (product) =>
                  !isRaceFilter || raceSKUs.includes(product.data[0].sku)
              )
              .map((product) => (
                <div className="product-grid-item" key={product.data[0].sku}>
                  <img
                    src={product.data[0].image}
                    alt={product.data[0].title}
                  />
                  <p className="product-grid-item-title">
                    {product.data[0].title}
                  </p>
                  <p className="product-grid-item-price">
                    {product.data[0].min_price} €
                  </p>
                </div>
              ))}
          </div>
        </>
      )}

      {(selectedBrand === "nike" || selectedBrand === "all") && (
        <>
          <h2>Nike</h2>
          <div className="nike-product-grid-container">
            {products.nikeProducts
              .filter(
                (product) =>
                  !isRaceFilter || raceSKUs.includes(product.data[0].sku)
              )
              .map((product) => (
                <div className="product-grid-item" key={product.data[0].sku}>
                  <img
                    src={product.data[0].image}
                    alt={product.data[0].title}
                  />
                  <p className="product-grid-item-title">
                    {product.data[0].title}
                  </p>
                  <p className="product-grid-item-price">
                    {product.data[0].min_price} €
                  </p>
                </div>
              ))}
          </div>
        </>
      )}

      {(selectedBrand === "adidas" || selectedBrand === "all") && (
        <>
          <h2>Adidas</h2>
          <div className="adidas-product-grid-container">
            {products.adidasProducts
              .filter(
                (product) =>
                  !isRaceFilter || raceSKUs.includes(product.data[0].sku)
              )
              .map((product) => (
                <div className="product-grid-item" key={product.data[0].sku}>
                  <img
                    src={product.data[0].image}
                    alt={product.data[0].title}
                  />
                  <p className="product-grid-item-title">
                    {product.data[0].title}
                  </p>
                  <p className="product-grid-item-price">
                    {product.data[0].min_price} €
                  </p>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ProductGrid;
