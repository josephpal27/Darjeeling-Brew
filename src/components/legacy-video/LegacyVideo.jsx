import './LegacyVideo.css';

const LegacyVideo = () => {
    return (
        <>
            <section className="legacy-video">
                <h5 data-aos="fade-up">A Legacy, Steeped in the Hills</h5>
                <div className="video-box">
                    <div className="video-box-left">
                        {/* <video autoPlay loop muted playsInline>
                            <source src="/videos/darjeeling.mp4" type="video/mp4" />
                        </video> */}
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
