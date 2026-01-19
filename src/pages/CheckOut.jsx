import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../css/CheckOut.css";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Checkout = () => {
    const { state } = useLocation();
    const product = state?.product;

    const navigate = useNavigate();

    const [qty, setQty] = useState(1);

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

    if (!product) {
        return (
            <p style={{ textAlign: "center", height: "90vh", lineHeight: "80vh" }}>
                No Product Selected
            </p>
        );
    }

    const totalAmount = product.price * qty;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const orderPayload = {
            productId: product.id,
            productName: product.name,
            price: product.price,
            quantity: qty,
            totalAmount,
            customer: formData,
        };

        console.log(orderPayload);

        alert("Redirecting to payment gateway...");
        // navigate("/payment");
    };

    return (
        <section>
            <form className="checkout" onSubmit={handleSubmit}>
                <div className="checkout-wrapper">
                    {/* Shipping Details */}
                    <div className="checkout-form">
                        <h1>Shipping Details</h1>

                        <div className="input-row">
                            <input
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>

                        <input
                            name="flat"
                            placeholder="Flat, Building, Floor, House No."
                            value={formData.flat}
                            onChange={handleChange}
                            required
                        />

                        <input
                            name="area"
                            placeholder="Area, Street, Sector"
                            value={formData.area}
                            onChange={handleChange}
                            required
                        />

                        <input
                            name="landmark"
                            placeholder="Landmark (Optional)"
                            value={formData.landmark}
                            onChange={handleChange}
                        />

                        <div className="input-row">
                            <input
                                name="city"
                                placeholder="City"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                            <input
                                name="state"
                                placeholder="State"
                                value={formData.state}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <input
                            name="pin"
                            placeholder="PIN Code"
                            type="text"
                            pattern="[0-9]{6}"
                            value={formData.pin}
                            onChange={handleChange}
                            required
                        />

                        <input
                            name="phone"
                            placeholder="Phone Number"
                            type="tel"
                            pattern="[0-9]{10}"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />

                        <div className="address-type">
                            <label>Address Type :</label>
                            <div className="address-options">
                                {["Home", "Office", "Others"].map((type) => (
                                    <button
                                        key={type}
                                        type="button"
                                        className={
                                            formData.addressType === type ? "active" : ""
                                        }
                                        onClick={() =>
                                            setFormData({
                                                ...formData,
                                                addressType: type,
                                            })
                                        }
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="checkout-summary">
                        <h2>Order Summary</h2>

                        <img src={product.image} alt={product.name} />
                        <p className="product-name">{product.name}</p>

                        <div className="qty-box">
                            <button
                                type="button"
                                onClick={() =>
                                    setQty((prev) => Math.max(1, prev - 1))
                                }
                                disabled={qty === 1}
                            >
                                <FaMinus />
                            </button>

                            <span>{qty}</span>

                            <button
                                type="button"
                                onClick={() =>
                                    setQty((prev) => Math.min(10, prev + 1))
                                }
                                disabled={qty === 10}
                            >
                                <FaPlus />
                            </button>
                        </div>

                        <p className="price">
                            ₹{product.price.toLocaleString("en-IN")} × {qty}
                        </p>

                        <h3>Total: ₹{totalAmount.toLocaleString("en-IN")}</h3>

                        <button className="checkout-btn" type="submit">
                            PROCEED TO CHECKOUT
                        </button>

                        <p className="terms">
                            By proceeding, you agree to our Terms & Refund Policy
                        </p>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Checkout;