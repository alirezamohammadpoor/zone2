import "./ProductGrid.css";
import { useState, useEffect } from "react";
import { fetchMultipleProducts } from "../../services/kicksService";
import FilterButton from "../buttons/FilterButton";
import ProductCard from "./ProductCard";

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
    "1013A115-100",
    "1011C028-200",
    "1011B875-101",
    "1011B440-101",
  ];
  const nikeSKUs = [
    "HF6413-100",
    "HF7357-900",
    "DR2615-100",
    "HM6803-103",
    "FD2722-701",
    "FD0317-333",
  ];
  const adidasSKUs = ["JR6365", "JH6206", "IH5564", "H03612", "JR6368"];

  const raceSKUs = [
    "HF7357-900",
    "JR6365",
    "1013A123-401",
    "1013A123-400",
    "IH5564",
    "1013A115-100",
  ];

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
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) return <div>Loading all products...</div>;
  if (error) return <div>Error: Products not found {error}</div>;

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
      <div className="product-grid-filter">
        <FilterButton
          text="All"
          onClick={() => setSelectedBrand("all")}
          isSelected={selectedBrand === "all"}
        />
        <FilterButton
          text="Asics"
          onClick={() => setSelectedBrand("asics")}
          isSelected={selectedBrand === "asics"}
        />
        <FilterButton
          text="Nike"
          onClick={() => setSelectedBrand("nike")}
          isSelected={selectedBrand === "nike"}
        />
        <FilterButton
          text="Adidas"
          onClick={() => setSelectedBrand("adidas")}
          isSelected={selectedBrand === "adidas"}
        />
        <FilterButton
          text="Race Shoes"
          onClick={() => setIsRaceFilter(!isRaceFilter)}
          isSelected={isRaceFilter}
        />
        <FilterButton
          text="Clear Filters"
          onClick={() => {
            setSelectedBrand("all");
            setIsRaceFilter(false);
          }}
          isSelected={false}
        />
      </div>

      {(selectedBrand === "asics" || selectedBrand === "all") && (
        <div className="asics-product-grid-container">
          {products.asicsProducts
            .filter(
              (product) =>
                !isRaceFilter || raceSKUs.includes(product.data[0].sku)
            )
            .map((product) => (
              <ProductCard
                key={product.data[0].sku}
                image={product.data[0].image}
                title={product.data[0].title}
                price={product.data[0].min_price}
                sku={product.data[0].sku}
              />
            ))}
        </div>
      )}

      {(selectedBrand === "nike" || selectedBrand === "all") && (
        <div className="nike-product-grid-container">
          {products.nikeProducts
            .filter(
              (product) =>
                !isRaceFilter || raceSKUs.includes(product.data[0].sku)
            )
            .map((product) => (
              <ProductCard
                key={product.data[0].sku}
                image={product.data[0].image}
                title={product.data[0].title}
                price={product.data[0].min_price}
                sku={product.data[0].sku}
              />
            ))}
        </div>
      )}

      {(selectedBrand === "adidas" || selectedBrand === "all") && (
        <div className="adidas-product-grid-container">
          {products.adidasProducts
            .filter(
              (product) =>
                !isRaceFilter || raceSKUs.includes(product.data[0].sku)
            )
            .map((product) => (
              <ProductCard
                key={product.data[0].sku}
                image={product.data[0].image}
                title={product.data[0].title}
                price={product.data[0].min_price}
                sku={product.data[0].sku}
              />
            ))}
        </div>
      )}
    </div>
  );
}

export default ProductGrid;
