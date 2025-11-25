import './OurProducts.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
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
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            grabCursor={false}
            spaceBetween={0}
            speed={1000}
          >

            <SwiperSlide id="product-slide-1" >
              <span>CONSUMER PACKS</span>
              <img src={productSlide1} alt="Product 1" loading="lazy" />
            </SwiperSlide>

            {/* <SwiperSlide>
              <span>HIMALAYAN ELIXIR CLASSIC</span>
              <img src={productSlide2} alt="Product 2" loading="lazy" />
              <div className="slide-foot">
                <span>Product Essence</span>
                <p>Harvested during the monsoons, offering a smooth, full-bodied taste. Everyday luxury that brings the mountain to your morning. Can be had with a dash of milk and sugar.</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <span>HIMALAYAN ELIXIR RUBY</span>
              <img src={productSlide3} alt="Product 3" loading="lazy" />
              <div className="slide-foot">
                <span>Product Essence</span>
                <p>Matured under the bright Himalayan sun, and picked at a time when the sun is strong and the air still cool from the mountains, the leaves develop a unique depth of flavour known as muscatel - a natural fruity note.</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <span>HIMALAYAN ELIXIR GOLD</span>
              <img src={productSlide4} alt="Product 4" loading="lazy" />
              <div className="slide-foot">
                <span>Product Essence</span>
                <p>The rarest of rare harvest - plucked at dawn in early spring, when the Himalayan mist is still on the leaves. Lquantity is grown and harvested in entire Darjeeling.</p>
              </div>
            </SwiperSlide> */}

          </Swiper>
        </div>
      </section>
    </>
  )
}

export default OurProducts
