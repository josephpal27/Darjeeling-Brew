import { useState } from 'react';
import '../css/Cart.css';

import { IoSearch } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";

import product1 from '../assets/images/our-products/product-box-1.avif';

const Cart = () => {

    const [search, setSearch] = useState("");

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

                {/* Cart Items */}
                <div className="cart-content">
                    {/* Left Products */}
                    <div className="cart-products">

                        <div className="cart-item">
                            <div className="item-image">
                                <img src={product1} alt="Product" loading="lazy" />
                            </div>
                            <div className="item-desc">
                                <h2>Himalayan Elixir Classic</h2>
                                <p className="sub-head">Available in Whole Leaf & Fannings/Flakes</p>
                                <span>Product Essence</span>
                                <p className="item-essence">Harvested during the monsoons, it offers a smooth, full-bodied flavor - a daily luxury that brings the mountains to your morning, best enjoyed black or with a dash of milk and sugar.</p>
                            </div>
                            <div className="item-action">
                                <div className="quantity-count">
                                    <button>
                                        <FaMinus />
                                    </button>
                                    <span>1</span>
                                    <button>
                                        <FaPlus />
                                    </button>
                                </div>
                                <div className="remove-item">
                                    <button>
                                        <RiDeleteBin5Line />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Summery */}
                    <div className="cart-summary">
                        <div className="summary-head">
                            <span>Your Order</span>
                        </div>
                        <div className="summary-subtotal">
                            <span>Subtotal (2 items)</span> <span>₹000</span>
                        </div>
                        <div className="taxes-head">
                            <span>TAXES</span>
                        </div>
                        <div className="taxes-content">
                            <span>CGST</span> <span>₹000</span>
                        </div>
                        <div className="taxes-content">
                            <span>SGST</span> <span>₹000</span>
                        </div>
                        <div className="taxes-content">
                            <span>IGST</span> <span>₹000</span>
                        </div>
                        <div className="summary-total">
                            <span>Total</span> <span>₹000</span>
                        </div>
                        <div>
                            <button>PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart
