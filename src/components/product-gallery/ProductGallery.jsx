import "./ProductGallery.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa6";

const ProductGallery = ({ product }) => {
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);

  // Varient (default = first variant, usually 100g)
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants[0]
  );

  // Gallery Images based on selected variant
  const variantImages =
    product.gallery?.[selectedVariant.weight] || [];

  const [galleryImages, setGalleryImages] = useState(
    variantImages
  );

  // Reset gallery images when variant changes
  useEffect(() => {
    setGalleryImages(variantImages);
  }, [selectedVariant]);

  // price logic
  const unitPrice = selectedVariant.price;
  const totalPrice = unitPrice * qty;

  // Swap images on thumbnail click
  const handleImageClick = (clickedIndex) => {
    setGalleryImages((prev) => {
      const updated = [...prev];
      [updated[0], updated[clickedIndex]] = [
        updated[clickedIndex],
        updated[0],
      ];
      return updated;
    });
  };

  // Buy now handler
  const handleBuyNow = () => {
    navigate("/checkout", {
      state: {
        order: {
          productId: product.id,
          title: product.title,
          image: product.mainProductImage, // current main image
          variant: {
            weight: selectedVariant.weight,
            unitPrice: unitPrice,
          },
          quantity: qty,
          totalAmount: totalPrice,
        },
      },
    });
  };

  return (
    <section className="product-gallery">
      {/* Left : Images */}
      <div className="gallery-images">
        <div className="gallery-main">
          {galleryImages[0] && (
            <img
              src={galleryImages[0]}
              alt={product.title}
              loading="lazy"
            />
          )}
        </div>
        <div className="gallery-bottom">
          {galleryImages.slice(1, 5).map((img, index) => (
            <div
              key={img + index}
              className="bottom-box"
              onClick={() =>
                handleImageClick(index + 1)
              }
            >
              <img
                src={img}
                alt={product.title}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right : Content */}
      <div className="gallery-content">
        <h1>{product.title}</h1>

        <p>{product.desc}</p>

        <span id="price">
          ₹{unitPrice.toLocaleString("en-IN")}
        </span>

        <p id="select-qnty-lebel">Select Quantity</p>

        {/* Varient Selection */}
        <div className="quantity-btns">
          {product.variants.map((variant) => (
            <button
              key={variant.weight}
              className={
                selectedVariant.weight === variant.weight
                  ? "active"
                  : ""
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

        {/* Quantity Counter */}
        <div className="quantity-count-outer">
          <div className="quantity-count">
            <button
              onClick={() =>
                setQty((prev) =>
                  prev > 1 ? prev - 1 : prev
                )
              }
            >
              <FaMinus />
            </button>

            <span>{qty}</span>

            <button
              onClick={() =>
                setQty((prev) =>
                  prev < 10 ? prev + 1 : prev
                )
              }
            >
              <FaPlus />
            </button>
          </div>

          <div className="quantity-price">
            ₹{totalPrice.toLocaleString("en-IN")}
          </div>
        </div>

        <div className="action-btns">
          <button>Add to Cart</button>
          <button onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;