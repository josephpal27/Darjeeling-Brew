import './UltimateBeverage.css';
import icn1 from '../../assets/images/icons/beverage/1.png';
import icn2 from '../../assets/images/icons/beverage/2.png';
import icn3 from '../../assets/images/icons/beverage/3.png';
import icn4 from '../../assets/images/icons/beverage/4.png';

const beverageData = [
    {
        icon: icn1,
        title: "Beyond Tea, Beyond Coffee",
        points: [
            "Light yet energizing",
            "Zero bitterness, zero acidity",
            "No jitters — just a smooth, balanced uplift",
        ],
    },
    {
        icon: icn2,
        title: "Effortless Brew",
        points: [
            "A spoon or pinch of Darjeeling tea leaves",
            "Steep in water for in 3–4 mins",
            "Enjoy hot, cold, or as a sparkling infusion",
            "No complicated rituals — beauty in simplicity",
        ],
    },
    {
        icon: icn3,
        title: "Wellness in Every Cup",
        points: [
            "Rich in polyphenols & antioxidants",
            "Supports heart health, metabolism, skin vitality",
            "Natural detox & hydration",
        ],
    },
    {
        icon: icn4,
        title: "Romance of Origin",
        points: [
            "Grown on Himalayan slopes kissed by clouds",
            "Hand-picked, artisanal processing",
            "UNESCO-protected Geographical Indication heritage",
        ],
    },
];

const UltimateBeverage = () => {
    return (
        <>
            <section className="ultimate-beverage" id="the-ultimate-beverage">
                <h4 data-aos="fade-up">The Ultimate Beverage</h4>

                {beverageData.map((item, index) => (
                    <div className="beverage-box" key={index} data-aos="fade" data-aos-once="true">
                        <div className="beverage-box-left">
                            <img src={item.icon} alt="Icon" loading="lazy" />
                        </div>

                        <div className="beverage-box-right">
                            <span>{item.title}</span>
                            <ul>
                                {item.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}

                <img src="/images/ultimate-beverage-bg.avif" alt="Beverage Background" loading="lazy" id="beverage-bg" />
            </section>
        </>
    );
};

export default UltimateBeverage;