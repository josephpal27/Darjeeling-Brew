import "./OurProducts.css";
import "swiper/css";
import "swiper/css/navigation";

import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

import RatingStars from "../rating-stars/RatingStars";
import { products } from "../../data/products";

const OurProducts = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

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
                <img src={item.mainProductImage} alt={item.title} loading="lazy" />
              </div>

              <h2>{item.title}</h2>
              <p>{item.desc}</p>

              {/* <RatingStars rating={item.rating} /> */}

              <div className="btn-row">
                <Link to={`/products/${item.slug}`}>
                  <button id="buy-now-btn">Buy Now</button>
                </Link>

                <button id="add-cart-btn">
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
        </p>
      </div>
    </section>
  );
};

export default OurProducts;
