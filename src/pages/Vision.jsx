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
                    <h2 data-aos="fade" data-aos-once="true">We bring the magic of Darjeeling to every cup.</h2>
                    <p data-aos="fade" data-aos-once="true">A tea that captures the misty hills, soothing aroma, and delicate, uplifting taste. Our aim is to make this legendary specialty accessible to everyone, everywhere. Each sip awakens the senses, energizes naturally, and turns simple moments into rituals.</p>
                    <p data-aos="fade" data-aos-once="true">We want every cup to be more than tea—it’s a pause, a celebration, a connection. Experience the essence of Darjeeling with The Darjeeling Brew.</p>
                </div>
            </section>
        </>
    )
}

export default Vision
