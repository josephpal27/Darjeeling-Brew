import "./OurProducts.css";
import "swiper/css";
import "swiper/css/navigation";

import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";

const OurProducts = () => {
  const [search, setSearch] = useState("");
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddToCart = (item) => {
    addToCart({
      productId: item.id,
      title: item.title,
      image: item.mainProductImage,
      variant: {
        weight: item.variants[0].weight, // default 100g
        unitPrice: item.variants[0].price,
      },
      quantity: 1,
    });

    // Redirect to cart
    navigate("/cart");
  };

  return (
    <section className="our-products">
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

      {/* Products */}
      <div className="products-row" data-aos="fade" data-aos-once="true">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div className="product-card" key={item.id}>
              <div className="product-img">
                <img
                  src={item.mainProductImage}
                  alt={item.title}
                  loading="lazy"
                />
              </div>

              <h2>{item.title}</h2>
              <p>{item.desc}</p>

              <div className="btn-row">
                <Link to={`/products/${item.slug}`}>
                  <button id="buy-now-btn">Buy Now</button>
                </Link>

                <button
                  id="add-cart-btn"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart <FaCartPlus className="cart-icon" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-product-found">No Product Found</p>
        )}
      </div>

      {/* Foot Content */}
      <div className="our-products-foot" data-aos="fade" data-aos-once="true">
        <p>
          Pure Darjeeling teas from the Himalayas, nurtured by tradition and crafted for a clean, balanced cup.
        </p>
      </div>
    </section>
  );
};

export default OurProducts;