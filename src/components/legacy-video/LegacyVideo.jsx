import './LegacyVideo.css';

const LegacyVideo = () => {
    return (
        <>
            <section className="legacy-video">
                <h5 data-aos="fade-up">A Legacy, Steeped in the Hills</h5>
                <div className="video-box">
                    <div className="video-box-left">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/TsZ0SjEMM4o?si=9CPJqOcx7elI2_NJ"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                    <div className="video-box-right">
                        <p data-aos="fade">Where nature, nurture, and generations of craftsmanship meet. Every sip is a journey from mountain mist to mindful ritual. Rooted in Darjeeling, crafted for those who value origin and intention.</p>
                        <p data-aos="fade">Discover the story. Experience The Darjeeling Brew.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LegacyVideo
