import "./OurProducts.css";
import "swiper/css";
import "swiper/css/navigation";
import productBox1 from "../../assets/images/our-products/product-box-1.avif";
import productBox2 from "../../assets/images/our-products/product-box-2.avif";
import productBox3 from "../../assets/images/our-products/product-box-3.avif";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa6";
import RatingStars from "../rating-stars/RatingStars";
import { Link } from "react-router-dom";

const productsData = [
  {
    id: "1",
    title: "Himalayan Elixir Classic",
    price: 800,
    Image: productBox3,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor et dolore magna aliqua.",
    rating: 4.3,
  },
  {
    id: "2",
    title: "Himalayan Elixir Ruby",
    price: 2500,
    Image: productBox2,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor et dolore magna aliqua.",
    rating: 4.3,
  },
  {
    id: "3",
    title: "Himalayan Elixir Gold",
    price: 5000,
    Image: productBox1,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor et dolore magna aliqua.",
    rating: 4.9,
  },
];

const OurProducts = () => {

  const [search, setSearch] = useState("");

  const filteredProducts = productsData.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section className="our-products">
        {/* Search Box */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <IoSearch className="search-icon" />
        </div>
        {/* Products */}
        <div className="products-row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div className="product-card" key={item.id}>
                <div className="product-img">
                  <img src={item.Image} alt={item.title} loading="lazy" />
                </div>

                {/* <span id="price">₹{item.price}</span> */}
                <h2>{item.title}</h2>
                <p>{item.desc}</p>

                <RatingStars rating={item.rating} />

                <div className="btn-row">
                  <Link to={`/products/himalayan-elixir-classic`}>
                    <button id="buy-now-btn">Buy Now</button>
                  </Link>

                  <button id="add-cart-btn">
                    Add to Cart <FaCartPlus className="cart-icon" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-product-found">
              No Product Found
            </p>
          )}
        </div>

        {/* Foot Content */}
        <div className="our-products-foot">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
        </div>
      </section>
    </>
  );
};

export default OurProducts;