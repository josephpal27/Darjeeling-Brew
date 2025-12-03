import './OurProducts.css';
import productImage1 from '../../assets/images/our-products/product-1.avif';
import productImage2 from '../../assets/images/our-products/product-2.avif';
import productImage3 from '../../assets/images/our-products/product-3.avif';
import productImage4 from '../../assets/images/our-products/product-4.avif';
import angleImage from '../../assets/images/icons/left-angle.png';

const OurProducts = () => {
  return (
    <>
      <section className="our-products">
        <div className="our-products-head">
          <h5>Our Products</h5>
          <span>Serving Customers Worldwide</span>
          <p>Select from our range of The Darjeeling Brew, <br /> handpicked for the discerning consumers of today.</p>
        </div>

        {/* Products Container */}
        <div className="products-container">
          <span className="product-category">B2B</span>

          {/* Box 1 */}
          <div className="product-box" id="product-box-1">
            <span className="product-title">HIMALAYAN ELIXIR GOLD</span>
            <span className="product-sub-title">Available in Whole Leaf & Fannings/Flakes</span>
            <div className="product-image">
              <img src={productImage1} alt="Product Image" loading="lazy" />
              <div className="content-box left-content-box">
                <img src={angleImage} alt="left Arrow" loading="lazy" />
                <p>Fresh and Floral</p>
              </div>
              <div className="content-box right-content-box">
                <p>Bright, golden with a delicate shimmer</p>
                <img src={angleImage} alt="Right Arrow" loading="lazy" />
              </div>
            </div>
            <div className="box-foot">
              <span>Product Essence</span>
              <p>The rarest of rare harvests, plucked at dawn in early spring, when the Himalayan mist is still rests on the leaves, grown and produced in limited quantities.</p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="product-box" id="product-box-2">
            <span className="product-title">HIMALAYAN ELIXIR RUBY</span>
            <span className="product-sub-title">Available in Whole Leaf & Fannings/Flakes</span>
            <div className="product-image">
              <img src={productImage2} alt="Product Image" loading="lazy" />
              <div className="content-box left-content-box">
                <img src={angleImage} alt="left Arrow" loading="lazy" />
                <p>Sweet and fragrant with undertones of honey</p>
              </div>
              <div className="content-box right-content-box">
                <p>Ruby, Royal Amber</p>
                <img src={angleImage} alt="Right Arrow" loading="lazy" />
              </div>
            </div>
            <div className="box-foot">
              <span>Product Essence</span>
              <p>Matured under the bright Himalayan sun and picked when the rays are strong and yet the air remains cool from the misty mountains, these leaves develop a unique depth of flavour known as muscatel.</p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="product-box" id="product-box-3">
            <span className="product-title">HIMALAYAN ELIXIR REGULAR</span>
            <span className="product-sub-title">Available in Whole Leaf & Fannings/Flakes</span>
            <div className="product-image">
              <img src={productImage3} alt="Product Image" loading="lazy" />
              <div className="content-box left-content-box">
                <img src={angleImage} alt="left Arrow" loading="lazy" />
                <p>Smokey and Smooth</p>
              </div>
              <div className="content-box right-content-box">
                <p>Rich and Bold</p>
                <img src={angleImage} alt="Right Arrow" loading="lazy" />
              </div>
            </div>
            <div className="box-foot">
              <span>Product Essence</span>
              <p>Harvested during the monsoons, it offers a smooth, full-bodied flavor - a daily luxury that brings the mountains to your morning, best enjoyed black or with a dash of milk and sugar. </p>
            </div>
          </div>

          {/* Box 4 */}
          <div className="product-box" id="product-box-4">
            <span className="product-category" id="retail">RETAIL</span>
            <div className="product-image">
              <img src={productImage4} alt="Product Image" loading="lazy" />
            </div>
            <div className="box-foot">
              <span>50 gm | 100 gm</span>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default OurProducts
