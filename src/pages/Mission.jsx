import '../css/VisionMission.css';
import missionImg from '../assets/images/mission.avif';

const Mission = () => {
    return (
        <>
            {/* Banner */}
            <section className="mv-banner">
                <img src="/images/banners/sustainability-banner.avif" alt="Banner" loading="eager" />
                <div className="banner-content">
                    <h1 data-aos="fade-up">Our Mission</h1>
                </div>
            </section>

            {/* MV Content */}
            <section className="mv-content">
                <div className="mv-content-image">
                    <img src={missionImg} alt="Vision" loading="lazy" />
                    <div className="layer"></div>
                </div>
                <div className="mv-content-desc">
                    <h2 data-aos="fade" data-aos-once="true">Darjeeling Brew is not just tea</h2>
                    <p data-aos="fade" data-aos-once="true">It is a Himalayan wellness elixir. Easy to brew, packed with antioxidants, and rooted in the romance of the mountains.</p>
                    <p data-aos="fade" data-aos-once="true">Consumers today want more than taste; they want health, sophistication, and lifestyle. That is why Darjeeling Brew is the new choice for mindful, health-conscious customers worldwide.</p>
                </div>
            </section>
        </>
    )
}

export default Mission
