import './ProductGallery.css'

import productBox1 from '../../assets/images/our-products/product-box-3.avif';
import RatingStars from '../rating-stars/RatingStars';

import { FaPlus, FaMinus } from "react-icons/fa6";

const ProductGallery = () => {
    return (
        <>
            <section className="product-gallery">
                <div className="gallery-images">
                    <div className="gallery-main">
                        <img src={productBox1} alt="Product 1" loading="lazy" />
                    </div>
                    <div className="gallery-bottom">
                        <div className="bottom-box">
                            <img src={productBox1} alt="Product 1" loading="lazy" />
                        </div>
                        <div className="bottom-box">
                            <img src={productBox1} alt="Product 1" loading="lazy" />
                        </div>
                        <div className="bottom-box">
                            <img src={productBox1} alt="Product 1" loading="lazy" />
                        </div>
                        <div className="bottom-box">
                            <img src={productBox1} alt="Product 1" loading="lazy" />
                        </div>
                    </div>
                </div>
                <div className="gallery-content">
                    <h1>Himalayan Elixir Classic</h1>
                    <RatingStars rating="4.3" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <span id="price">₹800</span>
                    <p id="select-qnty-lebel" >Select Quantity</p>
                    <div className="quantity-btns">
                        <button className="active" >50 g</button>
                        <button>100 g</button>
                    </div>
                    <div className="quantity-count-outer">
                        <div className="quantity-count">
                            <button><FaMinus /></button>
                            <span>1</span>
                            <button><FaPlus /></button>
                        </div>
                        <div className="quantity-price">
                            ₹800
                        </div>
                    </div>
                    <div>
                        <button>Add to Cart</button>
                        <button>Buy Now</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductGallery
