import "./ProductGallery.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useCart } from "../../context/CartContext";

const ProductGallery = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [qty, setQty] = useState(1);

  // Variant (default = first variant)
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants[0]
  );

  const variantImages =
    product.gallery?.[selectedVariant.weight] || [];

  const [galleryImages, setGalleryImages] = useState(variantImages);

  useEffect(() => {
    setGalleryImages(variantImages);
  }, [selectedVariant]);

  const unitPrice = selectedVariant.price;
  const totalPrice = unitPrice * qty;

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

  // Add to Cart
  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      title: product.title,
      image: product.mainProductImage,
      variant: {
        weight: selectedVariant.weight,
        unitPrice,
      },
      quantity: qty,
    });

    // Redirect to cart
    navigate("/cart");
  };

  // Buy Now
  const handleBuyNow = () => {
    navigate("/checkout", {
      state: {
        order: {
          productId: product.id,
          title: product.title,
          image: product.mainProductImage,
          variant: {
            weight: selectedVariant.weight,
            unitPrice,
          },
          quantity: qty,
          totalAmount: totalPrice,
        },
      },
    });
  };

  return (
    <section className="product-gallery">
      <div className="gallery-images" data-aos="fade" data-aos-once="true">
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
              onClick={() => handleImageClick(index + 1)}
            >
              <img src={img} alt={product.title} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <div className="gallery-content" data-aos="fade" data-aos-once="true">
        <h1>{product.title}</h1>
        <p>{product.desc}</p>

        <span id="price">₹{unitPrice.toLocaleString("en-IN")}</span>

        <p id="select-qnty-lebel">Select Quantity</p>

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

        <div className="quantity-count-outer">
          <div className="quantity-count">
            <button onClick={() => setQty((p) => Math.max(1, p - 1))}>
              <FaMinus />
            </button>
            <span>{qty}</span>
            <button onClick={() => setQty((p) => Math.min(10, p + 1))}>
              <FaPlus />
            </button>
          </div>

          <div className="quantity-price">
            ₹{totalPrice.toLocaleString("en-IN")}
          </div>
        </div>

        <div className="action-btns">
          <button onClick={handleAddToCart}>Add to Cart</button>
          <button onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>

      <img src="/images/product-element.avif" alt="Element 1" loading="lazy" id="product-element-1" />

    </section>
  );
};

export default ProductGallery;
