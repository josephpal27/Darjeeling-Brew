import '../css/Home.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import bannerSlide1 from '/images/banners/home-banner-1.avif';
import bannerSlide2 from '/images/banners/home-banner-2.avif';
import logo from '../assets/images/logo/logo.avif';

import DarjeelingStory from '../components/darjeeling-story/DarjeelingStory';
import UltimateBeverage from '../components/ultimate-beverage/UltimateBeverage';
import OurProducts from '../components/our-products/OurProducts';
import AboutUs from '../components/about-us/AboutUs';
import ArtOfBrewing from '../components/art-of-brewing/ArtOfBrewing';
import VisionMission from '../components/vision-mission/VisionMission';

const Home = () => {
    return (
        <>
            {/* Banner Slider */}
            <section className="banner">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    slidesPerView={1}
                    centeredSlides={true}
                    loop={true}
                    grabCursor={false}
                    spaceBetween={0}
                    speed={1000}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                >

                    <SwiperSlide>
                        <img src={bannerSlide1} alt="Banner Slide 1" loading="lazy" />
                        <div className="slide-content">
                            <img src={logo} alt="Logo" loading="lazy" data-aos="fade-up" />
                            <h1 data-aos="fade">HIMALAYAN ELIXIR</h1>
                            <div className="line" data-aos="fade"></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={bannerSlide1} alt="Banner Slide 2" loading="lazy" />
                        <div className="slide-content">
                            <p>For the discerning, health-conscious consumer seeking a beverage that blends pleasure, wellness, and sophistication, Darjeeling Brew is a premium Himalayan infusion crafted from the finest leaves in the world's most iconic tea region. Unlike ordinary tea or coffee, it offers a gentle lift, an exquisite aroma, and restorative benefits making it the brew for modern, mindful living.</p>
                            <div className="line"></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={bannerSlide2} alt="Banner Slide 3" loading="lazy" />
                        <div className="slide-content">
                            <h2>The Wellness Brew for <br /> Morden Living</h2>
                            <div className="line"></div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </section>

            {/* Darjeeling Story */}
            <DarjeelingStory />

            {/* Ultimate Beverage */}
            <UltimateBeverage />

            {/* Our Products */}
            <OurProducts />

            {/* About Us */}
            <AboutUs />

            {/* Vision & Mission */}
            <VisionMission />

            {/* Art Of Brewing */}
            <ArtOfBrewing />
        </>
    )
}

export default Home
