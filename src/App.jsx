// Import necessary dependencies and components
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductGrid from "./components/product/ProductGrid";
import OrderPage from "./pages/OrderPage";
import CartPage from "./pages/CartPage";

// Main App component that handles routing
const App = () => {
  return (
    <Routes>
      {/* Layout wraps all routes for consistent page structure */}
      <Route path="/" element={<Layout />}>
        {/* Home page - landing page */}
        <Route index element={<HomePage />} />
        {/* Products grid - displays all products */}
        <Route path="products" element={<ProductGrid />} />
        {/* Individual product page - shows product details */}
        <Route path="product/:id" element={<ProductPage />} />
        {/* Shopping cart page */}
        <Route path="cart" element={<CartPage />} />
        {/* Order page - for checkout process */}
        <Route path="order" element={<OrderPage />} />
      </Route>
    </Routes>
  );
};

export default App;
