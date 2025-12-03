import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import "./VisionMission.css";

import visionImage from "../../assets/images/vision.avif";
import missionImage from "../../assets/images/mission.avif";

const VisionMission = () => {

    const swiperRef = useRef(null);
    const [activeTab, setActiveTab] = useState(0);

    const goToSlide = (index) => {
        swiperRef.current?.slideTo(index);
        setActiveTab(index);
    };

    return (
        <section className="vision-mission">

            {/* TABS */}
            <div className="vision-mission-tabs">
                <span
                    onClick={() => goToSlide(0)}
                    className={activeTab === 0 ? "active" : ""}
                >
                    Vision
                </span>

                <span
                    onClick={() => goToSlide(1)}
                    className={activeTab === 1 ? "active" : ""}
                >
                    Mission
                </span>
            </div>

            {/* SWIPER */}
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
                loop={false}
                className="vm-swiper"
            >
                {/* VISION SLIDE */}
                <SwiperSlide>
                    <div className="vm-slide">
                        <div className="slide-image">
                            <img src={visionImage} alt="Vision" loading="lazy" />
                            <div className="layer" data-aos="fade-right"></div>
                        </div>
                        <div className="slide-content" data-aos="fade">
                            <span>Where every sip celebrates life, awakens the mind, and energises the body.</span>
                        </div>
                    </div>
                </SwiperSlide>

                {/* MISSION SLIDE */}
                <SwiperSlide>
                    <div className="vm-slide">
                        <div className="slide-image">
                            <img src={missionImage} alt="Mission" loading="lazy" />
                            <div className="layer" data-aos="fade-right"></div>
                        </div>
                        <div className="slide-content" data-aos="fade">
                            <span>Darjeeling Brew is not just tea</span>
                            <p>It is a Himalayan wellness elixir. Easy to brew, packed with antioxidants, and rooted in the romance of the mountains.</p>
                            <p>Consumers today want more than taste; they want health, sophistication, and lifestyle. That is why Darjeeling Brew is the new choice for mindful, health-conscious customers worldwide.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default VisionMission;
