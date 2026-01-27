import { useLocation } from "react-router-dom";
import { useState } from "react";
import "../css/CheckOut.css";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Checkout = () => {
  const { state } = useLocation();
  const order = state?.order;

  if (!order) {
    return (
      <p style={{ textAlign: "center", height: "90vh", lineHeight: "80vh" }}>
        No Order Found
      </p>
    );
  }

  const items = order.fromCart
    ? order.items
    : [
      {
        productId: order.productId,
        title: order.title,
        image: order.image,
        variant: order.variant,
        quantity: order.quantity,
      },
    ];

  const [cartItems, setCartItems] = useState(items);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.variant.unitPrice * item.quantity,
    0
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    flat: "",
    area: "",
    landmark: "",
    city: "",
    state: "",
    pin: "",
    phone: "",
    addressType: "Home",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updateQty = (index, qty) => {
    const safeQty = Math.min(10, Math.max(1, qty));
    setCartItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, quantity: safeQty } : item
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderPayload = {
      items: cartItems,
      totalAmount,
      customer: formData,
    };

    console.log("FINAL ORDER PAYLOAD :", orderPayload);
    alert("Redirecting to payment gateway...");
  };

  return (
    <section>
      <form className="checkout" onSubmit={handleSubmit}>
        <div className="checkout-wrapper">
          {/* LEFT */}
          <div className="checkout-form">
            <h1>Contact</h1>

            <div className="input-row">
              <input name="firstName" placeholder="First Name" required onChange={handleChange} />
              <input name="lastName" placeholder="Last Name" onChange={handleChange} />
            </div>

            <input name="flat" placeholder="Flat, Building, Floor, House No." required onChange={handleChange} />
            <input name="area" placeholder="Area, Street, Sector" required onChange={handleChange} />
            <input name="landmark" placeholder="Landmark (Optional)" onChange={handleChange} />

            <div className="input-row">
              <input name="city" placeholder="City" required onChange={handleChange} />
              <input name="state" placeholder="State" required onChange={handleChange} />
            </div>

            <input name="pin" placeholder="PIN Code" pattern="[0-9]{6}" required onChange={handleChange} />
            <input name="phone" placeholder="Phone Number" pattern="[0-9]{10}" required onChange={handleChange} />
          </div>

          {/* RIGHT */}
          <div className="checkout-summary">
            {/* <h2>Order Summary</h2> */}

            {cartItems.map((item, index) => (
              <div key={index} className="checkout-item">
                <div className="checkout-item-image">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="checkout-item-desc">
                  <p className="product-name">{item.title}</p>

                  <p className="variant">
                    {item.variant.weight} g × ₹
                    {item.variant.unitPrice.toLocaleString("en-IN")}
                  </p>
                </div>

                <div className="qty-box">
                  <button
                    type="button"
                    onClick={() =>
                      updateQty(index, item.quantity > 1 ? item.quantity - 1 : 1)
                    }
                  >
                    <FaMinus />
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    type="button"
                    onClick={() =>
                      updateQty(
                        index,
                        item.quantity < 10 ? item.quantity + 1 : item.quantity
                      )
                    }
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            ))}

            <div className="checkout-coupon">
              <input type="text" placeholder="Apply Coupon Code" />
              <button type="button">Apply</button>
            </div>

            <div className="checkout-summary-final">
              <div>
                <span>Subtotal:</span>
                <span>₹{totalAmount.toLocaleString("en-IN")}</span>
              </div>
              <div>
                <span>Shipping:</span>
                <span>₹0</span>
              </div>
              <div>
                <span>Discount:</span>
                <span>₹0</span>
              </div>
              <div className="checkout-final">
                <span>Total:</span>
                <span>₹{totalAmount.toLocaleString("en-IN")}</span>
              </div>
            </div>

            <button className="checkout-btn" type="submit">
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Checkout;
