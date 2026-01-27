import { useState } from "react";
import "../css/Cart.css";

import { IoSearch } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import { useCart } from "../context/CartContext";

const Cart = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const { cart, updateQty, removeItem } = useCart();

  // Filter cart items by search
  const filteredCart = cart.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  // Subtotal calculation
  const subtotal = filteredCart.reduce(
    (sum, item) => sum + item.variant.unitPrice * item.quantity,
    0
  );

  return (
    <>
      <section className="cart">
        {/* Search Box */}
        <div className="search-box" data-aos="fade" data-aos-once="true">
          <input
            type="text"
            placeholder="Search here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <IoSearch className="search-icon" />
        </div>

        <div className="cart-content" data-aos="fade" data-aos-once="true">
          {/* Left : Cart Products */}
          <div className="cart-products">
            {filteredCart.length === 0 ? (
              <p className="no-cart">Your cart is empty</p>
            ) : (
              filteredCart.map((item, index) => (
                <div className="cart-item" key={index}>
                  <div className="item-image">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>

                  <div className="item-desc">
                    <h2>{item.title}</h2>
                    <p className="sub-head">Available in Whole Leaf & Fannings/Flakes</p>

                    <span>{item.variant.weight} g</span>
                    <p className="item-cart-price">
                      ₹{item.variant.unitPrice.toLocaleString("en-IN")}
                    </p>
                  </div>

                  <div className="item-action">
                    <div className="quantity-count">
                      <button
                        onClick={() =>
                          updateQty(
                            index,
                            item.quantity > 1 ? item.quantity - 1 : 1
                          )
                        }
                      >
                        <FaMinus />
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          updateQty(index, item.quantity + 1)
                        }
                      >
                        <FaPlus />
                      </button>
                    </div>

                    <div className="remove-item">
                      <button onClick={() => removeItem(index)}>
                        <RiDeleteBin5Line />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right : Summary */}
          <div className="cart-summary">
            <div className="summary-head">
              <span>Your Order</span>
            </div>

            <div className="summary-subtotal">
              <span>Subtotal ({filteredCart.length} {filteredCart.length === 1 ? "item" : "items"})</span>
              <span>₹{subtotal.toLocaleString("en-IN")}</span>
            </div>

            <div className="taxes-head">
              <span>TAXES</span>
            </div>

            <div className="taxes-content">
              <span>CGST</span>
              <span>₹0</span>
            </div>

            <div className="taxes-content">
              <span>SGST</span>
              <span>₹0</span>
            </div>

            <div className="taxes-content">
              <span>IGST</span>
              <span>₹0</span>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <span>₹{subtotal.toLocaleString("en-IN")}</span>
            </div>

            <div>
              <button
                disabled={filteredCart.length === 0}
                onClick={() =>
                  navigate("/checkout", {
                    state: {
                      order: {
                        fromCart: true,
                        items: filteredCart,
                      },
                    },
                  })
                }
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mountain-bg" style={{ backgroundColor: '#f4f8e1' }}>
        <img src="/images/mountain.avif" alt="Mountain" loading="lazy" width="100%" />
      </section>
    </>
  );
};

export default Cart;