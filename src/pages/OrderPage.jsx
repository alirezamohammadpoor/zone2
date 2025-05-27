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

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [isOrderSuccessful, setIsOrderSuccessful] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      city: "",
      postalCode: "",
      country: "",
    });

    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.postalCode) newErrors.postalCode = "Postal code is required";
    if (!formData.country) newErrors.country = "Country is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const orderData = {
      ...formData,
      items: cart,
      total: getTotalPrice(),
    };

    console.log("Order submitted:", orderData);
    clearCart();
    setIsOrderSuccessful(true);
  };

  return (
    <div className="order-page">
      {isOrderSuccessful ? (
        <div className="order-success">
          <h1>Order Successful!</h1>
          <p>Please check your email for order confirmation.</p>
          <p>Thank you for shopping with us!</p>
          <button className="home-button" onClick={() => navigate("/")}>
            Return to Home
          </button>
        </div>
      ) : (
        <>
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
              {errors.firstName && (
                <p className="error-message">{errors.firstName}</p>
              )}
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
              {errors.lastName && (
                <p className="error-message">{errors.lastName}</p>
              )}
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
              {errors.email && <p className="error-message">{errors.email}</p>}
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
              {errors.address && (
                <p className="error-message">{errors.address}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
              />
              {errors.city && <p className="error-message">{errors.city}</p>}
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
              {errors.postalCode && (
                <p className="error-message">{errors.postalCode}</p>
              )}
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
              {errors.country && (
                <p className="error-message">{errors.country}</p>
              )}
            </div>

            <div className="form-buttons">
              <button type="submit">Submit</button>
              <button type="button" onClick={() => navigate("/cart")}>
                Back to cart
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default OrderPage;
