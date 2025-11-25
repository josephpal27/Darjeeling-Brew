import './OurProducts.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import productSlide1 from '../../assets/images/products-slider/product-1.avif';
import productSlide2 from '../../assets/images/products-slider/product-2.avif';
import productSlide3 from '../../assets/images/products-slider/product-3.avif';
import productSlide4 from '../../assets/images/products-slider/product-4.avif';

const OurProducts = () => {
  return (
    <>
      <section className="our-products">
        <div className="our-products-head">
          <h5>Our Products</h5>
          <span>Serving Customers Worldwide</span>
          <p>Select from our range of The Darjeeling Brew, <br /> handpicked for the discerning consumers of today.</p>
        </div>
        <div className="our-products-slider">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            grabCursor={false}
            spaceBetween={0}
            speed={1000}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >

            <SwiperSlide id="product-slide-1">
              <span>CONSUMER PACKS</span>
              <img src={productSlide1} alt="Product 1" loading="lazy" />
            </SwiperSlide>

            <SwiperSlide id="product-slide-2">
              <span>HIMALAYAN ELIXIR CLASSIC</span>
              <img src={productSlide2} alt="Product 2" loading="lazy" />
              <div className="slide-foot">
                <span>Product Essence</span>
                <p>Harvested during the monsoons, offering a smooth, full-bodied taste. Everyday luxury that brings the mountain to your morning. Can be had with a dash of milk and sugar.</p>
              </div>
            </SwiperSlide>

            <SwiperSlide id="product-slide-3">
              <span>HIMALAYAN ELIXIR RUBY</span>
              <img src={productSlide3} alt="Product 3" loading="lazy" />
              <div className="slide-foot">
                <span>Product Essence</span>
                <p>Matured under the bright Himalayan sun, and picked at a time when the sun is strong and the air still cool from the mountains, the leaves develop a unique depth of flavour known as muscatel - a natural fruity note.</p>
              </div>
            </SwiperSlide>

            <SwiperSlide id="product-slide-4">
              <span>HIMALAYAN ELIXIR GOLD</span>
              <img src={productSlide4} alt="Product 4" loading="lazy" />
              <div className="slide-foot">
                <span>Product Essence</span>
                <p>The rarest of rare harvest - plucked at dawn in early spring, when the Himalayan mist is still on the leaves. Lquantity is grown and harvested in entire Darjeeling.</p>
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
