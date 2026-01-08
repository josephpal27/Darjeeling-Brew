import '../css/HotBrew.css';

import BrewServes from '../components/brew-serves/BrewServes';

const HotBrew = () => {
    return (
        <>
            {/* Banner */}
            <section className="banner">
                <img src="/images/banners/hot-brew-banner.avif" alt="Banner" loading="eager" />
                <div className="banner-content">
                    <h1>SIGNATURE SERVES</h1>
                    <p>A curated collection of modern recipes crafted to highlight the versatility of The Darjeeling Brew</p>
                </div>
            </section>

            {/* Brew Serves */}
            <section className="brew-serves">
                <div className="brew-serves-head">
                    <h2>HOT BREW SERVES</h2>
                    <p>Comforting, aromatic, and calming</p>
                </div>
                {/* Brew Serves Row */}
                <BrewServes />
            </section>
        </>
    )
}

export default HotBrew
