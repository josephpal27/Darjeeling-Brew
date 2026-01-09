import '../css/Sustainability.css';

import woman from '../assets/images/woman.avif';

const Sustainability = () => {
    return (
        <>
            {/* Banner */}
            <section className="banner">
                <img src="/images/banners/sustainability-banner.avif" alt="Banner" loading="eager" />
                <div className="banner-content">
                    <h1 data-aos="fade-up">How The Darjeeling Brew Champions Sustainability From Mountain Gardens to Global Cups</h1>
                </div>
            </section>

            {/* Sustainability */}
            <section className="sustainability">
                <div className="layer"></div>
                <div className="sus-left">
                    <p data-aos="fade">We work directly with local growers and smallholder families, ensuring fair pricing, transparent partnerships, and long-term stability rooted in generations of tea-making expertise.</p>
                </div>
                <div className="sus-center" data-aos="fade" data-aos-once="true">
                    <img src={woman} alt="Woman" loading="lazy" />
                </div>
                <div className="sus-right">
                    <p data-aos="fade">By investing in responsible cultivation and quality-focused practices, we honor both tradition and progress while bringing Darjeeling’s finest brew to global audiences.</p>
                </div>
            </section>

            {/* Sustainability Foot */}
            <section className="sustainability-foot">
                <p data-aos="fade">Our impact extends beyond the gardens. Tea cultivation supports livelihoods across harvesting, processing, packaging, and logistics, while women — who form the backbone of Darjeeling’s tea workforce,  remain central to our ecosystem. We actively support women through fair wages, stable employment, and skill development, strengthening families and local economies.</p>
                <p data-aos="fade">Equally important is our commitment to the land. We promote soil regeneration, biodiversity, and responsible water use to protect Darjeeling’s fragile mountain ecology. Guided by circular economy principles, we compost spent tea leaves, reduce waste through eco-conscious packaging, and operate with energy-efficient systems. Through these choices, we strive to create a brew that respects people, preserves nature, and builds a more sustainable future.</p>
            </section>
        </>
    )
}

export default Sustainability
