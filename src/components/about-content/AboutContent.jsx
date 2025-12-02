import './AboutContent.css';
import aboutImage from '../../assets/images/about-content.avif';

const AboutContent = () => {
    return (
        <>
            <section className="about-content">
                <div className="about-content-left">
                    <h3>The Darjeeling Story</h3>
                    <span>Taste the Himalayas. Feel the Romance.</span>
                    <p>In the hush of dawn, when the mists cradle the emerald slopes of Darjeeling, the first rays of sunlight travel across the ridges, touching the tea gardens with gold.</p>
                    <p>From here, the Himalayas rise like a dream — their guardian, Mount Everest, standing eternal in the distance, kissed by clouds and draped in snow. It is said that the soul of Darjeeling’s tea is born in the dance 
                    between earth and sky — in the crisp mountain air that carries whispers from Everest, and in the pure spring waters that trickle down from the high snows to nourish the tender leaves.</p>
                    <p>Each leaf, plucked by hand, carries the poetry of the land — the laughter of the mist, the sigh of the pines, and the quiet blessing of the world’s highest peak. Legend has it that travellers who sipped this golden liquid felt as if they were drinking the very spirit of the mountains — a spirit that stirred courage, serenity, and an unspoken longing.</p>
                    <p>The Darjeeling Brew is not merely tea. It is the romance of Everest’s eternal snow with the gardens that sway beneath her gaze.</p>
                </div>
                <div className="about-content-right">
                    <img src={aboutImage} alt="About Image" loading="lazy" />
                    <div className="layer"></div>
                </div>
            </section>
        </>
    )
}

export default AboutContent
