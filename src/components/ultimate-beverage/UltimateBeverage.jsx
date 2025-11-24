import './UltimateBeverage.css';
import beverageCup from '../../assets/images/beverage-cup.avif';

const UltimateBeverage = () => {
    return (
        <>
            <section className="ultimate-beverage">
                <h4>The Ultimate Beverage</h4>
                <div className="beverage-content-row">
                    <div className="beverage-left">
                        <div className="box">
                            <span>Beyond Tea, Beyond Coffee</span>
                            <ul>
                                <li>Light yet energizing</li>
                                <li>Zero bitterness, zero acidity</li>
                                <li>No jitters - just a smooth, balanced uplift</li>
                            </ul>
                        </div>
                        <div className="box">
                            <span>Effortless Brew</span>
                            <ul>
                                <li>A spoon or pinch of Darjeeling tea leaves</li>
                                <li>Steep in water for in 3-4 minutes</li>
                                <li>Enjoy hot, cold, or as a sparkling infusion</li>
                                <li>No complicated rituals - beauty in simplicityft</li>
                            </ul>
                        </div>
                    </div>
                    <div className="beverage-center">
                        <img src={beverageCup} alt="Beverge Cup" loading="lazy" />
                    </div>
                    <div className="beverage-right">
                        <div className="box">
                            <span>Wellness in Every Cup</span>
                            <ul>
                                <li>Rich in polyphenols & antioxidants</li>
                                <li>Supports heart health, metabolism, skin vitality</li>
                                <li>Natural detox & hydration</li>
                            </ul>
                        </div>
                        <div className="box">
                            <span>Romance of Origin</span>
                            <ul>
                                <li>Grown on Himalayan slopes kissed by clouds</li>
                                <li>Hand-picked, artisanal processing</li>
                                <li>UNESCO-protected Geographical Indication heritage</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UltimateBeverage
