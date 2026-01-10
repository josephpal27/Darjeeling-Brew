import '../css/VisionMission.css';

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
                <h2>Darjeeling Brew is not just tea</h2>
                <p>It is a Himalayan wellness elixir. Easy to brew, packed with antioxidants, and rooted in the romance of the mountains.</p>
                <p>Consumers today want more than taste; they want health, sophistication, and lifestyle. That is why Darjeeling Brew is the new choice for mindful, health-conscious customers worldwide.</p>
            </section>
        </>
    )
}

export default Mission
