import './OurProducts.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import productImage1 from '../../assets/images/our-products/product-1.avif';
import productImage2 from '../../assets/images/our-products/product-2.avif';
import productImage3 from '../../assets/images/our-products/product-3.avif';
import productImage4 from '../../assets/images/our-products/product-4.avif';
import productBox1 from '../../assets/images/our-products/product-box-1.png';
import productBox2 from '../../assets/images/our-products/product-box-2.png';
import productBox3 from '../../assets/images/our-products/product-box-3.png';
import angleImage from '../../assets/images/icons/left-angle.png';

const OurProducts = () => {
  return (
    <>
      <section className="our-products" id="products">
        <div className="our-products-head">
          <h5 data-aos="fade-up">Our Products</h5>
          <span data-aos="fade">Serving Customers Worldwide</span>
          <p data-aos="fade">Select from our range of The Darjeeling Brew All Flushes and Grades available <br /> (Wholeleaf and Fannings/ Flakes)</p>
        </div>

        {/* Products Slider */}
        <div className="products-slider">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            grabCursor={true}
            spaceBetween={0}
            autoHeight={true}
            speed={1000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >

            <SwiperSlide id="slide-1">
              <span className="product-category">B2B</span>
              <div className="line"></div>
              <span className="product-title">HIMALAYAN ELIXIR GOLD</span>
              <p className="product-sub-title">Available in Whole Leaf & Fannings/Flakes</p>

              <div className="cup-boxes">
                <div className="left-cup-content">
                  <img src={angleImage} alt="Angle Image" loading="lazy" />
                  <p>Fresh and Floral</p>
                </div>
                <div className="cup-image">
                  <img src={productImage1} alt="Product Image" loading="lazy" />
                </div>
                <div className="right-cup-content">
                  <p>Bright, golden with a <br /> delicate shimmer</p>
                  <img src={angleImage} alt="Angle Image" loading="lazy" />
                </div>
              </div>

              <div className="container-boxes">
                <img src={productBox1} alt="Container Image" loading="lazy" />
                <span>Product Essence</span>
                <p>The rarest of rare harvests, plucked at dawn in early spring, when the Himalayan mist is still rests on the leaves, grown and produced in limited quantities.</p>
                <p className="container-box-desc">
                  <span>Bulk Packs</span> - 1 kg to 20 kg ( Customisable options available) <br /> <span>Retail Packs</span> - 50g and 100g
                </p>
                <button>View Product</button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <span className="product-category">B2B</span>
              <div className="line"></div>
              <span className="product-title">HIMALAYAN ELIXIR RUBY</span>
              <p className="product-sub-title">Available in Whole Leaf & Fannings/Flakes</p>

              <div className="cup-boxes">
                <div className="left-cup-content">
                  <img src={angleImage} alt="Angle Image" loading="lazy" />
                  <p>Sweet and fragrant with <br /> undertones of honey</p>
                </div>
                <div className="cup-image">
                  <img src={productImage2} alt="Product Image" loading="lazy" />
                </div>
                <div className="right-cup-content">
                  <p>Ruby, Royal Amber</p>
                  <img src={angleImage} alt="Angle Image" loading="lazy" />
                </div>
              </div>

              <div className="container-boxes">
                <img src={productBox2} alt="Container Image" loading="lazy" />
                <span>Product Essence</span>
                <p>Matured under the bright Himalayan sun and picked when the rays are strong and yet the air remains cool from the misty mountains, these leaves develop a unique depth of flavour known as muscatel.</p>
                <p className="container-box-desc">
                  <span>Bulk Packs</span> - 1 kg to 20 kg ( Customisable options available) <br /> <span>Retail Packs</span> - 50g and 100g
                </p>
                <button>View Product</button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <span className="product-category">B2B</span>
              <div className="line"></div>
              <span className="product-title">HIMALAYAN ELIXIR REGULAR</span>
              <p className="product-sub-title">Available in Whole Leaf & Fannings/Flakes</p>

              <div className="cup-boxes">
                <div className="left-cup-content">
                  <img src={angleImage} alt="Angle Image" loading="lazy" />
                  <p>Smokey and Smooth</p>
                </div>
                <div className="cup-image">
                  <img src={productImage3} alt="Product Image" loading="lazy" />
                </div>
                <div className="right-cup-content">
                  <p>Rich and Bold</p>
                  <img src={angleImage} alt="Angle Image" loading="lazy" />
                </div>
              </div>

              <div className="container-boxes">
                <img src={productBox3} alt="Container Image" loading="lazy" />
                <span>Product Essence</span>
                <p>Harvested during the monsoons, it offers a smooth, full-bodied flavor - a daily luxury that brings the mountains to your morning, best enjoyed black or with a dash of milk and sugar.</p>
                <p className="container-box-desc">
                  <span>Bulk Packs</span> - 1 kg to 20 kg ( Customisable options available) <br /> <span>Retail Packs</span> - 50g and 100g
                </p>
                <button>View Product</button>
              </div>
            </SwiperSlide>

          </Swiper>

          {/* Navigation Buttons */}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>

        </div>

      </section>
    </>
  )
}

export default OurProducts
