import './AboutUs.css';
import aboutImage1 from '../../assets/images/about-1.avif';
import aboutImage2 from '../../assets/images/about-2.avif';
import aboutImage3 from '../../assets/images/about-3.avif';

const AboutUs = () => {
    return (
        <>
            <section className="home-about-us" id="about-us">
                <h4 data-aos="fade-up">About Us</h4>
                <div className="about-us-image-row">
                    <img src={aboutImage1} alt="About Image 1" loading="lazy" />
                    <img src={aboutImage2} alt="About Image 2" loading="lazy" />
                    <img src={aboutImage3} alt="About Image 3" loading="lazy" />
                </div>
                <p data-aos="fade">With a 200-year legacy, The Darjeeling Brew is one of the largest marketers of Darjeeling tea. It is your one-stop source for premium Darjeeling Tea across all grades and qualities, sourced directly from the finest estates in Darjeeling.</p>
            </section>
        </>
    )
}

export default AboutUs
