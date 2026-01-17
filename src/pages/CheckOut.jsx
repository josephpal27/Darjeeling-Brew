import { useLocation } from "react-router-dom";
import { useState } from "react";
import "../css/CheckOut.css";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Checkout = () => {
    const { state } = useLocation();
    const product = state?.product;

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
        return <p style={{ textAlign: "center" }}>No product selected</p>;
    }

    const totalAmount = product.price * qty;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleProceed = () => {
        const orderPayload = {
            productId: product.id,
            productName: product.name,
            price: product.price,
            quantity: qty,
            totalAmount,
            customer: formData,
        };

        console.log("ORDER PAYLOAD (for backend):", orderPayload);

        alert("Redirecting to payment gateway...");
    };

    return (
        <>
            <section className="checkout">
                <div className="checkout-wrapper">
                    {/* Shipping Details*/}
                    <div className="checkout-form">
                        <h1>Shipping Details</h1>

                        <div className="input-row">
                            <input
                                name="firstName"
                                placeholder="First Name"
                                onChange={handleChange}
                            />
                            <input
                                name="lastName"
                                placeholder="Last Name"
                                onChange={handleChange}
                            />
                        </div>

                        <input
                            name="flat"
                            placeholder="Flat, Building, Floor, House No."
                            onChange={handleChange}
                        />

                        <input
                            name="area"
                            placeholder="Area, Street, Sector"
                            onChange={handleChange}
                        />

                        <input
                            name="landmark"
                            placeholder="Landmark (Optional)"
                            onChange={handleChange}
                        />

                        <div className="input-row">
                            <input
                                name="city"
                                placeholder="City"
                                onChange={handleChange}
                            />
                            <input
                                name="state"
                                placeholder="State"
                                onChange={handleChange}
                            />
                        </div>

                        <input
                            name="pin"
                            placeholder="PIN Code"
                            onChange={handleChange}
                        />

                        <input
                            name="phone"
                            placeholder="Phone Number"
                            onChange={handleChange}
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
                                            setFormData({ ...formData, addressType: type })
                                        }
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Order Summery*/}
                    <div className="checkout-summary">
                        <h2>Order Summary</h2>

                        <img src={product.image} alt={product.name} />
                        <p className="product-name">{product.name}</p>

                        <div className="qty-box">
                            <button
                                onClick={() => setQty((prev) => Math.max(1, prev - 1))}
                                disabled={qty === 1}
                            >
                                <FaMinus />
                            </button>

                            <span>{qty}</span>

                            <button
                                onClick={() => setQty((prev) => Math.min(10, prev + 1))}
                                disabled={qty === 10}
                            >
                                <FaPlus />
                            </button>
                        </div>

                        <p className="price">
                            ₹{product.price} × {qty}
                        </p>

                        <h3>Total: ₹{totalAmount}</h3>

                        <button className="checkout-btn" onClick={handleProceed}>
                            PROCEED TO CHECKOUT
                        </button>

                        <p className="terms">
                            By proceeding, you agree to our Terms & Refund Policy
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Checkout;
