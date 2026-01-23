import './ProductCups.css';

import productCup1 from '../../assets/images/our-products/product-1.avif';
import angle from '../../assets/images/icons/left-angle.png';

const ProductCups = () => {
  return (
    <>
      <section className="product-cup">
        <div className="product-cup-head">
            <h2>Himalayan Elixir Classic</h2>
            <p>Available in Whole Leaf & Fannings/Flakes</p>
        </div>
        <div className="product-cup-row">
            <div className="product-cup-content" id="product-cup-content-left">
                <img src={angle} alt="Arrow Left" loading="lazy" />
                <span>Smokey and Smooth</span>
            </div>
            <div className="product-cup-image">
                <img src={productCup1} alt="Product Cup" loading="lazy" />
            </div>
            <div className="product-cup-content" id="product-cup-content-right">
                <span>Rich and Bold</span>
                <img src={angle} alt="Arrow Right" loading="lazy" />
            </div>
        </div>
        <div className="product-cup-foot">
            <span>Product Essence</span>
            <p>Harvested during the monsoons, it offers a smooth, full-bodied flavor - a daily luxury that brings the mountains to your morning, best enjoyed black or with a dash of milk and sugar.</p>
        </div>
      </section>
    </>
  )
}

export default ProductCups
