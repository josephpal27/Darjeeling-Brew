import '../css/VisionMission.css';

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
                <h2 data-aos="fade" data-aos-once="true">Where every sip celebrates life, awakens the mind, and energises the body.</h2>
                <p data-aos="fade" data-aos-once="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci-didunt ut labore et dolore magna aliqua.</p>
                <p data-aos="fade" data-aos-once="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci-didunt ut labore et dolore magna aliqua.</p>
            </section>
        </>
    )
}

export default Vision
