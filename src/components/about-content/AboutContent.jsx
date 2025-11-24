import { Link } from 'react-router-dom';
import './AboutContent.css';
import { BsArrowRightShort } from "react-icons/bs";
import aboutImage from '../../assets/images/about-content.avif';

const AboutContent = () => {
    return (
        <>
            <section className="about-content">
                <div className="about-content-left">
                    <h3>The Darjeeling Brew - A Romance with the Himalayas</h3>
                    <p>In the hush of dawn, when the mists cradle the emerald slopes of Darjeeling, the first rays of sunlight travel across the ridges, touching the tea gardens with gold.</p>
                    <p>From here, the Himalayas rise like a dream their guardian, Mount Everest, standing eternal in the distance, kissed by clouds and draped in snow.</p>
                    <Link to="/about-us"><button>Read More <BsArrowRightShort className="icon" /></button></Link>
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
