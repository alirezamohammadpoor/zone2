import { useState, useContext } from "react";
import "./OrderPage.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function OrderPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the form from refreshing the page

    // Basic validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.address ||
      !formData.city ||
      !formData.postalCode ||
      !formData.country
    ) {
      alert("Please fill in all fields");
      return;
    }

    // If validation passes, handle the order
    const orderData = {
      ...formData,
      items: cart,
      total: getTotalPrice(),
    };

    console.log("Order submitted:", orderData);
    clearCart(); // Clear the cart
    alert("Order placed successfully!"); // Show success message
    navigate("/"); // Navigate to home page
  };

  return (
    <div className="order-page">
      <h1>Checkout</h1>
      <div className="order-summary">
        <h2>Order Summary</h2>
        {cart.map((item) => (
          <div key={item.id} className="order-item">
            <img
              src={item.image}
              alt={item.name}
              className="order-item-image"
            />
            <div className="order-item-details">
              <h3>{item.name}</h3>
              <p>Size: US {item.size}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: €{item.price}</p>
            </div>
          </div>
        ))}
        <div className="order-total">
          <p>Total: €{getTotalPrice()}</p>
        </div>
      </div>
      <form className="order-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={(e) =>
              setFormData({ ...formData, postalCode: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={(e) =>
              setFormData({ ...formData, country: e.target.value })
            }
          />
        </div>

        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => navigate("/cart")}>
            Back to cart
          </button>
        </div>
      </form>
    </div>
  );
}

export default OrderPage;
