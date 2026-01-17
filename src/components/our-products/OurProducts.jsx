import "./OurProducts.css";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import productImage1 from "../../assets/images/our-products/product-1.avif";
import productImage2 from "../../assets/images/our-products/product-2.avif";
import productImage3 from "../../assets/images/our-products/product-3.avif";
import productBox1 from "../../assets/images/our-products/product-box-1.avif";
import productBox2 from "../../assets/images/our-products/product-box-2.avif";
import productBox3 from "../../assets/images/our-products/product-box-3.avif";

import angleImage from "../../assets/images/icons/left-angle.png";

import leaf from "../../assets/images/tea-leaf.avif";

const productsData = [
  {
    id: "slide-1",
    title: "HIMALAYAN ELIXIR GOLD",
    cupLeft: "Fresh and Floral",
    cupRight: "Bright, golden with a <br /> delicate shimmer",
    cupImage: productImage1,
    boxImage: productBox1,
    essence:
      "The rarest of rare harvests, plucked at dawn in early spring, when the Himalayan mist is still rests on the leaves, grown and produced in limited quantities.",
  },
  {
    title: "HIMALAYAN ELIXIR RUBY",
    cupLeft: "Sweet and fragrant with <br /> undertones of honey",
    cupRight: "Ruby, Royal Amber",
    cupImage: productImage2,
    boxImage: productBox2,
    essence:
      "Matured under the bright Himalayan sun and picked when the rays are strong and yet the air remains cool from the misty mountains, these leaves develop a unique depth of flavour known as muscatel.",
  },
  {
    title: "HIMALAYAN ELIXIR CLASSIC",
    cupLeft: "Smokey and Smooth",
    cupRight: "Rich and Bold",
    cupImage: productImage3,
    boxImage: productBox3,
    essence:
      "Harvested during the monsoons, it offers a smooth, full-bodied flavor - a daily luxury that brings the mountains to your morning, best enjoyed black or with a dash of milk and sugar.",
  },
];

const OurProducts = () => {

  const navigate = useNavigate();

  return (
    <>
      <section className="our-products" id="our-products">
        <div className="our-products-head">
          <h1 data-aos="fade-up">Our Products</h1>
          <span data-aos="fade">Serving Customers Worldwide</span>
          <p data-aos="fade">
            Select from our range of The Darjeeling Brew All Flushes and Grades
            available <br /> (Wholeleaf and Fannings/ Flakes)
          </p>
        </div>

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
            {productsData.map((product, index) => (
              <SwiperSlide key={index} id={product.id || undefined}>
                <span className="product-category" data-aos="fade" data-aos-once="true">B2B</span>
                <div className="line" data-aos="fade" data-aos-once="true"></div>
                <span className="product-title" data-aos="fade" data-aos-once="true">{product.title}</span>
                <p className="product-sub-title" data-aos="fade" data-aos-once="true">Available in Whole Leaf & Fannings/Flakes</p>

                <div className="cup-boxes">
                  <div className="left-cup-content" data-aos="fade-left" data-aos-once="true">
                    <img src={angleImage} alt="Angle Image" loading="lazy" />
                    <p dangerouslySetInnerHTML={{ __html: product.cupLeft, }} />
                  </div>

                  <div className="cup-image" data-aos="fade" data-aos-once="true">
                    <img src={product.cupImage} alt="Product Image" loading="lazy" />
                  </div>

                  <div className="right-cup-content" data-aos="fade-right" data-aos-once="true">
                    <p dangerouslySetInnerHTML={{ __html: product.cupRight, }} />
                    <img src={angleImage} alt="Angle Image" loading="lazy" />
                  </div>
                </div>

                <div className="container-boxes" data-aos="fade" data-aos-once="true" >
                  <img src={product.boxImage} alt="Container Image" loading="lazy" />
                  <span>Product Essence</span>
                  <p>{product.essence}</p>

                  <p className="container-box-desc">
                    <span>Bulk Packs</span> - 1 kg to 20 kg ( Customisable options
                    available) <br />
                    <span>Retail Packs</span> - 50g and 100g
                  </p>

                  <button
                    onClick={() =>
                      navigate("/checkout", {
                        state: {
                          product: {
                            id: product.title.replace(/\s+/g, "-").toLowerCase(),
                            name: product.title,
                            price: 450, // TEMP price (backend will replace)
                            image: product.boxImage,
                          },
                        },
                      })
                    }
                  >
                    Buy Now
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>

        <div className="leaf" id="left-leaf">
          <img src={leaf} alt="Leaf" loading="lazy" data-aos="zoom-in" data-aos-once="true" />
        </div>
        <div className="leaf" id="right-leaf">
          <img src={leaf} alt="Leaf" loading="lazy" data-aos="zoom-in" data-aos-once="true" />
        </div>
      </section>
    </>
  );
};

export default OurProducts;