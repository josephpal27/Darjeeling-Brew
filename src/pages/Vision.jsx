import '../css/VisionMission.css';
import visionImg from '../assets/images/vision.avif';

const Vision = () => {
    return (
        <>
            {/* Banner */}
            <section className="mv-banner">
                <img src="/images/banners/sustainability-banner.avif" alt="Banner" loading="eager" />
                <div className="banner-content">
                    <h1 data-aos="fade-up">Our Vision</h1>
                </div>
            </section>

            {/* MV Content */}
            <section className="mv-content">
                <div className="mv-content-image">
                    <img src={visionImg} alt="Vision" loading="lazy" />
                    <div className="layer"></div>
                </div>
                <div className="mv-content-desc">
                    <h2 data-aos="fade" data-aos-once="true">Where every sip celebrates life, awakens the mind, and energises the body.</h2>
                    <p data-aos="fade" data-aos-once="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci-didunt ut labore et dolore magna aliqua.</p>
                    <p data-aos="fade" data-aos-once="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci-didunt ut labore et dolore magna aliqua.</p>
                </div>
            </section>
        </>
    )
}

export default Vision
