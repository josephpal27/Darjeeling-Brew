import './UltimateBeverage.css';
import beverageCup from '../../assets/images/beverage-cup.avif';
import icn1 from '../../assets/images/icons/beverage/1.webp';
import icn2 from '../../assets/images/icons/beverage/2.webp';
import icn3 from '../../assets/images/icons/beverage/3.webp';
import icn4 from '../../assets/images/icons/beverage/4.webp';

const UltimateBeverage = () => {
    return (
        <>
            <section className="ultimate-beverage">
                <h4>The Ultimate Beverage</h4>
                <div className="beverage-content-row">
                    <div className="beverage-left">
                        <div className="box">
                            <div className="box-image">
                                <img src={icn1} alt="Icon" loading="lazy" />
                            </div>
                            <div className="box-content">
                                <span>Beyond Tea, Beyond Coffee</span>
                                <ul>
                                    <li>Light yet energizing</li>
                                    <li>Zero bitterness, zero acidity</li>
                                    <li>No jitters - just a smooth, balanced uplift</li>
                                </ul>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-image">
                                <img src={icn2} alt="Icon" loading="lazy" />
                            </div>
                            <div className="box-content">
                                <span>Effortless Brew</span>
                                <ul>
                                    <li>A spoon or pinch of Darjeeling tea leaves</li>
                                    <li>Steep in water for in 3-4 minutes</li>
                                    <li>Enjoy hot, cold, or as a sparkling infusion</li>
                                    <li>No complicated rituals - beauty in simplicity</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="beverage-center">
                        <img src={beverageCup} alt="Beverge Cup" loading="lazy" />
                    </div>
                    <div className="beverage-right">
                        <div className="box">
                            <div className="box-image">
                                <img src={icn3} alt="Icon" loading="lazy" />
                            </div>
                            <div className="box-content">
                                <span>Wellness in Every Cup</span>
                                <ul>
                                    <li>Rich in polyphenols & antioxidants</li>
                                    <li>Supports heart health, metabolism, skin vitality</li>
                                    <li>Natural detox & hydration</li>
                                </ul>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-image">
                                <img src={icn4} alt="Icon" loading="lazy" />
                            </div>
                            <div className="box-content">
                                <span>Romance of Origin</span>
                                <ul>
                                    <li>Grown on Himalayan slopes kissed by clouds</li>
                                    <li>Hand-picked, artisanal processing</li>
                                    <li>UNESCO-protected Geographical Indication heritage</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UltimateBeverage
