import "./ProductGallery.css";
import { useState } from "react";

import RatingStars from "../rating-stars/RatingStars";
import { FaPlus, FaMinus } from "react-icons/fa6";

const ProductGallery = ({ product }) => {
  const [qty, setQty] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants[0] // default = 100g
  );
  const [activeImage, setActiveImage] = useState(product.mainProductImage);

  // PRICE LOGIC
  const unitPrice = selectedVariant.price;
  const totalPrice = unitPrice * qty;

  return (
    <section className="product-gallery">
      {/* LEFT : IMAGES */}
      <div className="gallery-images">
        <div className="gallery-main">
          <img src={activeImage} alt={product.title} loading="lazy" />
        </div>

        <div className="gallery-bottom">
          {product.images.map((img, index) => (
            <div
              key={index}
              className={`bottom-box ${
                activeImage === img ? "active" : ""
              }`}
              onClick={() => setActiveImage(img)}
            >
              <img src={img} alt={product.title} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT : CONTENT */}
      <div className="gallery-content">
        <h1>{product.title}</h1>

        <RatingStars rating={product.rating} />

        <p>{product.desc}</p>

        {/* BIG PRICE (variant only) */}
        <span id="price">
          ₹{unitPrice.toLocaleString("en-IN")}
        </span>

        <p id="select-qnty-lebel">Select Quantity</p>

        {/* VARIANT SELECTION */}
        <div className="quantity-btns">
          {product.variants.map((variant) => (
            <button
              key={variant.weight}
              className={
                selectedVariant.weight === variant.weight ? "active" : ""
              }
              onClick={() => {
                setSelectedVariant(variant);
                setQty(1);
              }}
            >
              {variant.weight} g
            </button>
          ))}
        </div>

        {/* QUANTITY COUNTER */}
        <div className="quantity-count-outer">
          <div className="quantity-count">
            <button
              onClick={() =>
                setQty((prev) => (prev > 1 ? prev - 1 : prev))
              }
            >
              <FaMinus />
            </button>

            <span>{qty}</span>

            <button
              onClick={() =>
                setQty((prev) => (prev < 10 ? prev + 1 : prev))
              }
            >
              <FaPlus />
            </button>
          </div>

          {/* SMALL PRICE (variant × qty) */}
          <div className="quantity-price">
            ₹{totalPrice.toLocaleString("en-IN")}
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="action-btns">
          <button>Add to Cart</button>
          <button>Buy Now</button>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;